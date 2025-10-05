import mongoose from "mongoose";
import PositionSchema from "../schemas/PositionSchema.js";

const PositionModel = mongoose.model("position", PositionSchema);

export default PositionModel;
