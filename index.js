// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
// Initialize express and define a port
const app = express()
const PORT = process.env.PORT || 3000
var indexRouter = require('./routes/index');

// Register Body parser to my app to i can parseing request and response
app.use(bodyParser.json())
// Main routers file
app.use('/', indexRouter);

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
