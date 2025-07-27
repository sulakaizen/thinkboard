import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();
router.get("/", getAllNotes);

router.post("/", createNote)

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

export default router;

// 7JfdWC8yISeCrIiw

// mongodb+srv://sulacoder:7JfdWC8yISeCrIiw@cluster0.f0he2fy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0