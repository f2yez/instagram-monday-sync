// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())
app.post("/hook/instagram", (req, res) => {
  return "welcome to  hook";
});

app.post("/hook/instagram", (req, res) => {
  console.log(req.body)
  res.status(200).end();
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
