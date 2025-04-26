import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/liaplus_task");
const db = mongoose.connection;

export default db;
