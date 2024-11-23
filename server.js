// Load the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';  // Listen on all network interfaces
const port = 8080;            // Change the port to 8080

// Create an HTTP server and define the request handling function
const server = http.createServer((req, res) => {
  // Set the response HTTP header to indicate HTML content
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Send an HTML response
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Bigoli.com</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f9;
                color: #333;
            }
            header {
                background-color: #0073e6;
                color: white;
                padding: 10px 0;
                text-align: center;
            }
            main {
                padding: 20px;
                text-align: center;
            }
            footer {
                background-color: #333;
                color: white;
                text-align: center;
                padding: 10px 0;
                position: fixed;
                width: 100%;
                bottom: 0;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Welcome to Bigoli.com!</h1>
        </header>
        <main>
            <h2>ayoko naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaputanginaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </main>
        <footer>
            <p>&copy; 2024 Bigoli.com</p>
        </footer>
    </body>
    </html>
  `);
});

// Make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://bigoli.com:${port}/`);
});
