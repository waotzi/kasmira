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
      ${slot}
    </body>
</html>`
