export default (slot: string) => `
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=devic
        e-width, initial-scale=1.0">
        <title>Kasmira</title>
        <meta name="description" content="manage your kas portfolio">
        <meta name="author" content="waotzi">    
        <link rel="stylesheet" href="/public/style.css">
        <link rel="icon" type="image/png" href="/public/favicon.png" />
    </head>
    <body>
      <header>
        <img width="128" src="/public/logo.png"/>
        <a href="/">
          <h1>Kasmira</h1>
        </a>
      </header>
      <nav>
          <ul>
              <li>
              </li>
          </ul>
          <ul>
              <li>
              </li>
          </ul>
      </nav>
      <main>
        ${slot}
      </main>
    </body>
</html>`
