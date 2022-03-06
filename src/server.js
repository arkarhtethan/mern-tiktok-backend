import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import dotenv from "dotenv";
import Videos from "./dbModel.js";

dotenv.config();
// const connection_url =

const app = express();

const port = 9000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeaders("Access-Control-Allow-Origin", "*");
  res.setHeaders("Access-Control-Allow-Headers", "*");
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/v1/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v1/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
