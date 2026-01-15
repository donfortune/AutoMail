const express = require('express');
const db = require('./src/config/db');
const app = express();
const PORT = process.env.PORT


if (!PORT) {
  console.error('PORT is not defined in the environment variables');
  process.exit(1);
}

app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});