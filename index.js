const express = require("express");
const cors = require("cors");

// Import routers
const loginRouter = require("./routes/login");
const commanderRouter = require("./routes/commanders");
const setRouter = require("./routes/sets");

// Create express app
const app = express();
app.use(express.json());
// Enable CORS
app.use(cors());

// Use routers
app.use(loginRouter);
app.use(commanderRouter);
app.use(setRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Commander Finder API is running");
});
