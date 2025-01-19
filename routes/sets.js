const { Router } = require("express");

const SetService = require("../services/setService");

const router = Router();

const baseURL = "/api/sets";

router.get(baseURL, (req, res) => {
  const service = new SetService();

  service
    .getSets()
    .then((sets) => {
      res.json(sets);
    })
    .catch((error) => {
      console.error("Error fetching sets:", error);
      res.status(500).send("Error fetching sets");
    });
});

module.exports = router;
