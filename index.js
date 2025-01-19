const express = require("express");
const cors = require("cors");

// Import routers
const commanderRouter = require("./routes/commanders");
const setRouter = require("./routes/sets");

// Create express app
const app = express();
app.use(express.json());
// Enable CORS
app.use(cors());

// Use routers
app.use(commanderRouter);
app.use(setRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
