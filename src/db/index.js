import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
    console.log(
      `mongoDB is connected at: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(error);

    console.log(`mongoDB connection error: ${error}`);
    process.exit(1); //check the exit code in node js
  }
};

export default connectDB;
