import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
const app = express()


// Setting Up Plugins For Express To Perfrom CRUD Operation on different data requests like
/**
 * CORS : Cross Origin Resource Sharing
 * express.json : to get json as request
 * epress.urlencoded : to get data from url, url is normally encoded
 * express.static : to store files imgs etc to public folder for some specific time to perform upload function init.
 * cookieParser : to get and send cookie from user to server
 */
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "16kb",
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(express.static("public"))
app.use(cookieParser());






// Exporting express App
export { app }