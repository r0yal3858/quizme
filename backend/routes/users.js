import Router from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.json("users get route");
});

router
  .route("/:id")
  .get((req, res) => {
    res.json("user specific route");
  })
  .post((req, res) => {
    res.json("user specific post route");
  })
  .patch((req, res) => {
    res.json("user specific patch route");
  })
  .delete((req, res) => {
    res.json("user specific delete route");
  });

router.route("/:id").post((req, res) => {});
export default router;
