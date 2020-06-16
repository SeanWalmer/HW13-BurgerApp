const express = require(`express`);
const exphbs = require(`express-handlebars`);
const router = require(`./controllers/burgers_controller`);
const path = require(`path`);

// Server info
const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.static(path.join(__dirname, `/public`)));
app.use(express.json());
app.use(router);

// Handlebars Configuration
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

// start server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
