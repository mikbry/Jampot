/**
 * index.js
 */
import express from "express";
import Db from "./db";

const app = express();
const appName = process.env.APP_NAME || "Demo";
app.get("/", (req, res) => {
  console.log("GET request /");
  res.send(`Jampot:${appName} API root  v1`);
});
app.get("/echo", (req, res) => {
  console.log("GET request /echo");
  res.send("echo");
});
app.get("/db", (req, res) => {
  console.log("GET request /db");
  const name = process.env.APP_DATABASE_NAME || "demo";
  const db = new Db(name, process.env.APP_DATABASE_IP);
  db.test();
  res.send("db");
});
const port = process.env.APP_BACKEND_PORT || 3000;
app.listen(port, () =>
  console.log(`Jampot :${appName} Backend  app listening on port ${port}`),
);
