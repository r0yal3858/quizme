import users from "./users.js";
import tests from "./test.js";

const wrapper = (app) => {
  app.use("/users", users);
  app.use("/tests", tests);
  app.use("*", (req, res) => {
    res.status(404).json("page not found");
  });
};

export default wrapper;
