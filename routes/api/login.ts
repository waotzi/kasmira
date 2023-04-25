import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";
import db, { User } from "../../database.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    const users = await db.find({selector: { username, password }}) 
    console.log(users, db)
    if (users.docs.length === 1) {
      const user = users.docs[0]
      const userObj = user as unknown as User; // Type assertion
      const headers = new Headers();
      const newSession = crypto.randomUUID();
      userObj.session = newSession
      await db.put(userObj); 
      setCookie(headers, {

        name: "auth",
        value: newSession,
        maxAge: 120,
        sameSite: "Lax",
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("location", `/${username}`);
      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      const headers = new Headers();
      headers.set("location", "/login?error=invalid_credentials");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
  },
};
