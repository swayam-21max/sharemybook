const express = require('express');
const Book = require('../models/Book');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new book
router.post('/', protect, async (req, res) => {
  const { title, author, genre, condition } = req.body;
  
  try {
    const newBook = new Book({
      title,
      author,
      genre,
      condition,
      owner: req.user.id,  // Set the owner as the logged-in user
    });

    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('owner', 'name email'); // Populate owner field
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
});

// Update a book
router.put('/:id', protect, async (req, res) => {
  const { title, author, genre, condition } = req.body;

  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.owner.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to update this book' });
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.condition = condition || book.condition;

    await book.save();
    res.json({ message: 'Book updated successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
});

// Delete a book
router.delete('/:id', protect, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.owner.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to delete this book' });
    }

    await book.remove();
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
});

module.exports = router;
