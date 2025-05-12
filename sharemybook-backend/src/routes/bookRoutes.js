const express = require("express");
const router = express.Router();
const { addBook, getAllBooks, deleteBook } = require("../controllers/bookController");
// const authMiddleware = require("../middleware/auth"); // Optional if using auth

// Public or protected (add authMiddleware if needed)
router.post("/", addBook);
router.get("/", getAllBooks);
router.delete("/:id", deleteBook);

module.exports = router;
