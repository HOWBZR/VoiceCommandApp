
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);



    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });

