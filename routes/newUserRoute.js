const router = require("express").Router();

// Displays Home Page
router.get("/", (req, res) => {
  res.render("userpage", { title: "Home" });
});

module.exports = router;
