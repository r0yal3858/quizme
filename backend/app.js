import express from "express";

const app = express();

app.route("/").get((req, res) => {
  console.log("this is a get requestion");
});
app.listen(4000, () => {
  console.log("backend running in port 4000");
});
