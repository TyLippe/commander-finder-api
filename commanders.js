const { Router } = require("express");

const router = Router();

const baseURL = "/api/commanders";

router.get(baseURL, (req, res) => {
  res.json([]);
});

module.exports = router;
