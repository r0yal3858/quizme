import express from "express";
import wrapper from "./routes/index.js";

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
wrapper(app);

app.listen(4000, () => {
  console.log("backend running in port 4000");
});
