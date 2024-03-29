const express = require("express");
const app = express();
const DB = require("./database").connectDB;
const bodyParser = require('body-parser');
const cors = require('cors')
// routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRouter");
// connect to data base
DB();

app.use(express.json());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.use("",authRoutes);
app.use("/api", postRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});

