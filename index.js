const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();

app.use(express.json());

//connecting to my mongo db
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
})
    .then(() => console.log("Db is up"))
    .catch((err) => console.log(err));

//declaring routes to individual routes
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movie", movieRoute)
app.use("/api/lists", listRoute)


app.listen(8080, () => {
    console.log("Backend server is up..!")
})