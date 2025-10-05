import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import { HoldingsModel } from "./model/HoldingsModel.js";
import PositionModel from "./model/PositionModel.js";
import { OrdersModel } from "./model/OrdersModel.js";
import AuthRoutes from "./Routes/AuthRouter.js";

dotenv.config();

const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.get("/addPositions", async (req, res) => {
//   let tempHoldings = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newPosition = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();
//   });

//   res.send("Done!");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved");
});

app.use("/", AuthRoutes);

app.get("/login");

mongoose.connect(url).then(() => {
  console.log("DB connected!");
});

app.listen(port, () => {
  console.log(`App is listening to the server ${port}`);
});
