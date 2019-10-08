/**
 * index.js
 */
import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log("GET request /");
  res.send("Jambase API root  v1");
});
app.get("/echo", (req, res) => {
  console.log("GET request /echo");
  res.send("echo");
});
app.listen(3000, () => console.log("Backend  app listening on port 3000"));
