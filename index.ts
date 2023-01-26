import fastify from "fastify";

const app = fastify({
  logger: true,
});

app.get("/", async (req, res) => {
  res.send({ hello: "world" });
});

app.listen(
  {
    port: process.env.PORT || (4000 as any),
    host: "0.0.0.0",
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
