// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
// Initialize express and define a port
const app = express()
const hostname = '185.132.250.36';
const PORT = process.env.PORT || 3000;
const { setMondayToken } = require('./helpers/monday');
var indexRouter = require('./routes/index');

// Register Body parser to my app to i can parseing request and response
app.use(bodyParser.json())
setMondayToken();

// Main routers file
app.use('/', indexRouter);

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on http://${hostname}:${PORT}/`))
