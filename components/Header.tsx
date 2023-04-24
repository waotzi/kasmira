
import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

interface HeaderProps {
  isAllowed: boolean;
}

export const handler: Handlers = {
    GET(req, ctx) {
      const cookies = getCookies(req.headers);
      return ctx.render!({ isAllowed: cookies.auth === "bar" });
    },
  };

export default function Counter({isAllowed} : HeaderProps ) {
    return (
        <header>
            <a href="/" >
                <img class="rot-340" width="48" src="/logo.png"/>
                <h2>Kasmira</h2>
                <img class="rot-20" width="48" src="/logo.png"/>
            </a>
            {isAllowed ?
                <div>
                    logged in
                </div>
            :
            <div class="flex">
                <a href="/signup" class="btn btn-secondary">Sign Up</a>
                <a href="/login" class="btn btn-primary">Log In</a>
            </div>}
        </header>
    );
}