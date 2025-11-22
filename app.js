const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("CI/CD working! Updated version,congrats dinesh,how are you");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
