import mongoose from "mongoose";
import colors from "colors";

const DataBaseConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(colors.green.underline("Connected to Database !"));
  } catch (error) {
    throw error;
  }
  mongoose.connection.on("error", (err) => {
    logError(err);
  });
};

export default DataBaseConnection;
