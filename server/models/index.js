import mongoose from "mongoose";

import User from "./user";
import Task from "./task";


const connectDb = () => {
  return mongoose.connect(`${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { User, Task };

export { connectDb };

export default models;
