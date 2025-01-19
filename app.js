const express = require("express");
const commanderRouter = require("./commanders");

const app = express();
app.use(express.json());
app.use(commanderRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
