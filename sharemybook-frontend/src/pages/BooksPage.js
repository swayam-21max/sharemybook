import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Modal, Form, FormControl } from 'react-bootstrap';
import './BooksPage.css';
import axios from 'axios';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '', cover: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');

  // 🆕 Fetch books from DB on mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/books/');
        setBooks(res.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);


  
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setNewBook({ title: '', author: '', price: '', cover: '' });
  };

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    if (!newBook.title || !newBook.author || !newBook.price || !newBook.cover) {
      alert('Please fill all fields!');
      return;
    }
  
    if (isNaN(newBook.price) || newBook.price <= 0) {
      alert('Please enter a valid price!');
      return;
    }
  
    const bookData = { 
      title: newBook.title,
      author: newBook.author,
      price: parseFloat(newBook.price),
      cover: newBook.cover
    };
  
    try {
      // 1. Add new book to backend
      await axios.post('http://localhost:5001/api/books/', bookData);
  
      // 2. Fetch updated list from backend
      const res = await axios.get('http://localhost:5001/api/books/');
      console.log('Fetched books:', res.data);
      setBooks(res.data);
  
      handleClose();
    } catch (error) {
      console.error('Error adding/fetching books:', error);
      alert('Failed to add or fetch books!');
    }
  };
  

  const buyBook = (bookId) => {
    alert(`You have purchased "${books.find(book => book.id === bookId).title}"`);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else {
      return a.price - b.price;
    }
  });

  return (
    <Container className="books-container">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="books-header">Your Registered Books</h2>
        <div>
          <Button
            variant="outline-secondary"
            className="toggle-view"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            {viewMode === 'grid' ? 'List View' : 'Grid View'}
          </Button>{' '}
          <Button variant="primary" className="btn-add" onClick={handleShow}>
            Add New Book
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <FormControl
          type="text"
          placeholder="Search by title"
          className="search-bar"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select className="sort-dropdown" onChange={handleSort} value={sortBy}>
          <option value="title">Sort by Title</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <Row className={viewMode === 'grid' ? '' : 'flex-column'}>
        {sortedBooks.map((book) => (
          <Col md={viewMode === 'grid' ? 4 : 12} key={book.id}>
            <Card className="book-card mb-4">
              <Card.Img variant="top" src={book.cover} />
              <Card.Body>
                <Card.Title className="book-title">{book.title}</Card.Title>
                <Card.Text className="book-text">Author: {book.author}</Card.Text>
                <Card.Text className="book-text">Price: ${book.price}</Card.Text>
                <Button variant="success" className="btn-buy" onClick={() => buyBook(book.id)}>
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBookTitle">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleChange}
                placeholder="Enter book title"
              />
            </Form.Group>
            <Form.Group controlId="formBookAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleChange}
                placeholder="Enter author name"
              />
            </Form.Group>
            <Form.Group controlId="formBookPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={newBook.price}
                onChange={handleChange}
                placeholder="Enter book price"
              />
            </Form.Group>
            <Form.Group controlId="formBookCover">
              <Form.Label>Cover Image URL</Form.Label>
              <Form.Control
                type="text"
                name="cover"
                value={newBook.cover}
                onChange={handleChange}
                placeholder="Enter cover image URL"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addBook}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BooksPage;
