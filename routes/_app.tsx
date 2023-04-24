// routes/_app.tsx

import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";


export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Kasmira - Fund Your Creative Projects and Ideas</title>
        <meta name="description" content="manage your kas portfolio"/>
        <meta name="author" content="waotzi"/>    
        <link rel="stylesheet" href={asset("global.css")} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script defer data-domain="kasmira.net" src="/js/script.js"></script>
      </Head>
      <body>
        <header>
            <a href="/" >
            <img width="48" src="/logo.png"/>
            <h3>Kasmira</h3>
            &nbsp;&nbsp;&nbsp;
            </a>
            <nav>
            <div class="flex">
                <a href="/signup" class="btn btn-secondary">Sign Up</a>
                <a href="/login" class="btn btn-primary">Log In</a>
            </div>
            </nav>
        </header>
        <main>
            <Component />
        </main>
        <footer>
            <p>
            Powered by <a href="https://fresh.deno.dev/">Fresh</a>.
            Supported with <a href="/kasmira">donations</a>.
            Maintained by <a href="https://waotzi.org">Waotzi</a>.
            </p>  
        </footer>
      </body>
    </html>
  );
}