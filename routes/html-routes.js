const path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    // cms route loads cms.html
    // app.get("/second", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/.html"));
    // });

    
};