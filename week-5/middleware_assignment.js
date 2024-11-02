//1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
//2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
const express = require("express");

const app = express();

function middlewareLog(req, res, next) {
    console.log("Method: " + req.method);
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log(`Request URL: ${fullUrl}`);
    console.log(new Date());
    next();
}
app.get("/requestcount", function(req, res) {
    res.json({ "Request Count": requestCount });
});

let requestCount = 0;

app.use((req, res, next) => {
    requestCount += 1;
    next();
});



app.use(middlewareLog);

app.get("/sum/:arg1/:arg2", function(req, res) {
    const a = parseInt(req.params.arg1);
    const b = parseInt(req.params.arg2);

    res.json({
        ans: a + b
    });
});

app.get("/multiply", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a * b
    });
});

app.get("/divide", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a / b
    });
});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
