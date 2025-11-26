const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Your CI/CD working fine ! Hello from jenkins + Docker");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
