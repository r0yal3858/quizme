import Router from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.json("test get route");
});

router
  .route("/:id")
  .get((req, res) => {
    res.json("test specific get route");
  })
  .post((req, res) => {
    res.json("test specific post route");
  })
  .patch((req, res) => {
    res.json("test specific patch route");
  })
  .delete((req, res) => {
    res.json("test specific delete route");
  });

export default router;
