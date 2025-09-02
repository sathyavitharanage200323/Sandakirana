import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Root page (fixes "Cannot GET /")
app.get("/", (_req, res) => {
  res.send("Sadakirana API is up. Try GET /health or /books");
});

// Health check
app.get("/health", (_req, res) => {
  res.json({ ok: true, message: "Sadakirana API is running" });
});

// Demo data
const books = [
  { id: 1, title: "Ada Lovelace – A Beginner’s Guide", price: 1200 },
  { id: 2, title: "Data Science for Kids", price: 1500 },
];

// Demo route
app.get("/books", (_req, res) => res.json(books));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
