const PORT = 4000;

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

if (!db.data) {
  db.data ||= { notes: [] };
  await db.write();
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/notes", (req, res) => {
  const notes = db.data.notes;
  return res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  return res.json({ id: req.params.id });
});

app.post("/notes/new", (req, res) => {
  const note = req.body.text;
  db.data.notes.push({
    id: nanoid(),
    text: note,
    updatedAt: new Date().toISOString(),
  });
  db.write();
  return res.json({ success: true });
});

app.post("/notes/update/:id", (req, res) => {
  const newText = req.body.text;
  const id = req.params.id;
  db.data.notes = db.data.notes.map((note) => {
    if (note.id === id) {
      return {
        ...note,
        text: newText,
        updatedAt: new Date().toISOString(),
      };
    }
    return note;
  });
  db.write();
  return res.json({ success: true });
});

app.post("/notes/delete/:id", (req, res) => {
  const id = req.params?.id;
  if (!id) return res.json({ success: false });
  db.data.notes = db.data.notes.filter((note) => note.id !== id);
  db.write();
  return res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});
