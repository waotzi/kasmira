// api/check-session.ts
import { Handlers } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import db, { User } from "../../database.ts";

export async function getUser(session: string | undefined): Promise<User | null> {
  if (!session) return null;
  const users = await db.find({ selector: { session }});
  if (users.docs.length === 0) {
    return null;
  }
  return users.docs[0] as unknown as User;
}


export const handler: Handlers = {
  async GET(req) {
    const cookies = getCookies(req.headers);
    const session = cookies.auth;

    const user = await getUser(session);

    if (user) {
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Session is not valid.", { status: 401 });
    }
  },
};