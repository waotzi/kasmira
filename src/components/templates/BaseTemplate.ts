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
    </head>
    <body>
      <header>
        <h1><a href="/">Kasmira</a></h1>
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
