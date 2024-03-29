const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const routerResume = require("./routes/resume");
app.use("/api", routerResume);

app.use((_, res, __) => {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Use api on routes: /api/tasks",
        data: "Not found",
    });
});

app.use((err, _, res, __) => {
    console.log(err.stack);
    res.status(500).json({
        status: "fail",
        code: 500,
        message: err.message,
        data: "Internal Server Error",
    });
});

const PORT = process.env.PORT || 3200;
const uriDb = process.env.DB_HOST; // use 'mongodb+srv://user:aHu5CGbgNS5DMMyr@cluster0.v5xfvu5.mongodb.net/?retryWrites=true&w=majority'

const connection = mongoose.connect(uriDb);

connection
    .then(() => {
        app.listen(PORT, function () {
            console.log(`Server running. Use our API on port: ${PORT}`);
        });
    })
    .catch((err) =>
        console.log(`Server not running. Error message: ${err.message}`)
    );
