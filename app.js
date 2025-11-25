const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("congrats ! Your CI/CD working fine ! Hello from jenkins + Docker with port 3000");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
