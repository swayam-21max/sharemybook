const Book = require("../models/Book");

// Add book from frontend to MongoDB
const addBook = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the request body for debugging
    const { title, author, price, cover } = req.body;


    if (!title || !author || !price || !cover) {
      return res.status(400).json({ message: "All fields are required." });
    }


    const book = new Book({
      title,
      author,
      price,
      cover,
      owner: req.user?.id || null, // optional if you want to link with a user
    });

    await book.save();
    res.status(201).json({ message: "Book added", book });
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error: error.message });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("owner", "name email");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.owner?.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await book.deleteOne();
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error: error.message });
  }
};

module.exports = { addBook, getAllBooks, deleteBook };