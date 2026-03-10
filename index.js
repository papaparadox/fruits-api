require("dotenv").config();
const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Fruits API listening on port ${port}`);
});
