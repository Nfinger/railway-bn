import { renderToReadableStream } from "react-dom/server";

const dt = new Intl.DateTimeFormat();

export default {
  port: process.env.PORT || 3000,
  async fetch() {
    return new Response(
      await renderToReadableStream(
        <html>
          <head>
            <title>Hello World</title>
          </head>
          <body>
            <h1>Hello from React!</h1> 
          </body>
        </html>
      )
    );
  },
};