import { connect, ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = () => {
  connect(process.env.MONGO_CONNECTION_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
    .then(() => console.log("DB connection successful!"))
    .catch((e) => {
      console.log("error while connencting database");
      console.log(e);
    });
};
