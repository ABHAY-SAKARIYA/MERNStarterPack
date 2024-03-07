import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDb = async () => {
    try{

        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(`DB connected on Host: ${connectionInstance.connection.host} Port : ${connectionInstance.connection.port}`);

    }catch (error){
        console.error("MONGODB COnnection Failed from db/connect.js : -",error);
        process.exit();
    }
}

export default connectToDb;