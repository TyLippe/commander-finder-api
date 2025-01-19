const { Router } = require("express");

const CommanderService = require("../services/commanderService");

const router = Router();

const baseURL = "/api/commanders";

router.post(baseURL, (req, res) => {
  const service = new CommanderService();

  const next_page = req.body.next_page;

  service
    .getCommanders(next_page)
    .then((commanders) => {
      res.json(commanders);
    })
    .catch((error) => {
      console.error("Error fetching commanders:", error);
      res.status(500).send("Error fetching commanders");
    });
});

router.post(baseURL + "/filter", (req, res) => {
  const service = new CommanderService();

  const next_page = req.body.next_page;
  const filterString = req.body.filterString;

  service
    .getFilteredCommanders(next_page, filterString)
    .then((commanders) => {
      res.json(commanders);
    })
    .catch((error) => {
      console.error("Error fetching commanders:", error);
      res.status(500).send("Error fetching commanders");
    });
});

module.exports = router;
