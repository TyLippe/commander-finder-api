const { Router } = require("express");

const LoginService = require("../services/loginService");

const router = Router();

const bodyParser = require("body-parser");

const baseURL = "/api/login";

// Middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post(baseURL, async (req, res) => {
  const { username, password } = req.body;

  const loginService = new LoginService();

  const result = await loginService.login(username, password);

  if (result.error) {
    return res.status(401).json(result);
  }

  res.status(200).json(result);
});

module.exports = router;
