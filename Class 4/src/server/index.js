const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

// for static files
app.use(express.static("public"));

// any 404 request will show index.html
app.get("*", (req, res, next) => {
  return res
    .status(404)
    .sendFile(path.join(__dirname, "../../public/index.html"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

