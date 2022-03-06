import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 9000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
