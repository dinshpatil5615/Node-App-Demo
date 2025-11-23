const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("CI/CD working fine! You are running this page using jenkins + Docker");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
