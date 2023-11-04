const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());

app.get("/api-key", (req, res) => {
  const countryKey = process.env.API_KEY_COUNTRY;
  const globalKey = process.env.API_KEY_GLOBAL;
  res.json({ countryKey, globalKey });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
