import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use("/api/notes", notesRoutes); // it will hit to notesRoutes

//What is an Endpoint?
// An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource

connectDB()

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});