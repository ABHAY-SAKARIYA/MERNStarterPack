// Import dotenv
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});


// Import Modules
import connectToDb from "./db/connect.js";





// Connect to Db
connectToDb();