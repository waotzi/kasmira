export default (slot: string) => `
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kasmira</title>
        <meta name="description" content="manage your kas portfolio">
        <meta name="author" content="waotzi">    
        <link rel="stylesheet" href="/public/style.css">
        <link rel="icon" type="image/png" href="/public/favicon.png" />
        <script defer data-domain="kasmira.net" src="/js/script.js"></script>
    </head>
    <body>
      <header>
        <a href="/">
          <img width="128" src="/public/logo.png"/>
          <h1>Kasmira</h1>
        </a>
      </header>
      <nav>
          <ul>
              <li>
              </li>
          </ul>
          <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
          </ul>
      </nav>
      <main>
        ${slot}
      </main>
    </body>
</html>`
