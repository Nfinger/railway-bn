// server.js
export default {
  port: Number(process.env.PORT ?? 3000),
  fetch(request) {
    return new Response(
      <div>
        <h1>Hello World</h1>
      </div>
    );
  },
};
