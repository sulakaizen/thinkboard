import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config(); //calling method dotenv helps us to work with environmental variables secret vars

const app = express();
const PORT = process.env.PORT || 5001

app.use("/api/notes", notesRoutes); // it will hit to notesRoutes

//What is an Endpoint?
// An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource

connectDB()

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});