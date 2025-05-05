const Book = require("../models/Book");

const addBook = async (req, res) => {
  try {
    const { title, author, genre, condition } = req.body;

    const book = new Book({
      title,
      author,
      genre,
      condition,
      owner: req.user.id
    });

    await book.save();
    res.status(201).json({ message: "Book added", book });
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("owner", "name email");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.owner.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });

    await book.deleteOne();
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error: error.message });
  }
};

module.exports = { addBook, getAllBooks, deleteBook };
