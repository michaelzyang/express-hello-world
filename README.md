# express-hello-world
This is a hello world express app.

To download the project dependencies execute `node install` in the project directory.

To start the server on localhost on the default port, execute `node .` in the project directory.
To use a different port (e.g. port 8080), execute `node . -p 8080`.

Then, use the `curl` commands in index.js to send requests to the server (or your browser or other http tool).

(Optional) Tunnel a public domain to the localhost server with `cloudflared tunnel --url http://localhost:8654/`.