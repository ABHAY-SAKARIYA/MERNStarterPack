// Import dotenv
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});


// Import Modules
import connectToDb from "./db/connect.js";
import { app } from "./app.js";





// Connect to Db
connectToDb()
.then( () => {
    // Running App in port 3022 if the database is connected successfully
    app.listen(process.env.PORT || 3022 , () => {
        console.log("Server is Started at ",process.env.PORT)
    })
})
.catch((error) => {
    // if database not connected show error
    console.log("Mongodb Connection Error", error);
})