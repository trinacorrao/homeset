import mongoose from "mongoose";

import User from "./user";


const connectDb = () => {
  return mongoose.connect(`${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { User, };

export { connectDb };

export default models;
