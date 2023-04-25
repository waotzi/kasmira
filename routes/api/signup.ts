import { Handlers } from "$fresh/server.ts";
import db, { User } from "../../database.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const confirmPassword = form.get("confirm_password") as string;

    if (password !== confirmPassword) {
      const headers = new Headers();
      headers.set("location", "/signup?error=error_password");
      return new Response(null, {
        status: 303,
        headers,
      });
    }

    const existingUser = await db.find({ selector: { username }});
    if (existingUser.docs.length !== 0) {
      const headers = new Headers();
      headers.set("location", "/signup?error=user_exists");
      return new Response(null, {
        status: 303,
        headers,
      });
    }

    // Generate a unique session token
    const session = crypto.randomUUID();

    const newUser: User = { _id: username, username, password, session, crypto: {} };
    await db.put(newUser);


    const headers = new Headers();
    headers.set("location", `/${username}`);
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
