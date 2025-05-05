import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal, Form, FormControl } from 'react-bootstrap';
import './BooksPage.css';

const BooksPage = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 7,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    },
    {
      id: 2,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 6,
      cover: 'https://i.pinimg.com/736x/49/7f/22/497f22527c6c0b20fb0bbe814ab918b2.jpg',
    },
    {
      id: 3,
      title: 'Class X Science NCERT ',
      author: 'NCERT',
      price: 8,
      cover: 'https://i.pinimg.com/736x/2d/2c/a2/2d2ca2e607a9b85b2fd0a0ddb413df8b.jpg',
    },
    {
      id: 4,
      title: 'Whispers in the Wind',
      author: 'Emily Brontë',
      price: 25,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 5,
      title: 'The Hidden Key',
      author: 'Mark Twain',
      price: 15,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 6,
      title: 'The Final Hour',
      author: 'Suzanne Collins',
      price: 28,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 7,
      title: 'Whispers in the Dark',
      author: 'Ray Bradbury',
      price: 18,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 8,
      title: 'The Moonlit Path',
      author: 'George Orwell',
      price: 21,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 9,
      title: 'Shadow of the Mist',
      author: 'H.P. Lovecraft',
      price: 24,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 10,
      title: 'Into the Abyss',
      author: 'Neil Gaiman',
      price: 30,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 11,
      title: 'The Broken Crown',
      author: 'J.R.R. Tolkien',
      price: 18,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 12,
      title: 'Tales of the Lost Kingdom',
      author: 'C.S. Lewis',
      price: 19,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 13,
      title: 'Beneath the Stars',
      author: 'Isaac Asimov',
      price: 23,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 14,
      title: 'The Dark Horizon',
      author: 'Arthur C. Clarke',
      price: 27,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 15,
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      price: 15,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 16,
      title: 'The Lost World',
      author: 'Sir Arthur Conan Doyle',
      price: 17,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 17,
      title: 'Time Traveler\'s Dream',
      author: 'H.G. Wells',
      price: 20,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 18,
      title: 'The Crystal Maze',
      author: 'Philip K. Dick',
      price: 22,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 19,
      title: 'The Last of Us',
      author: 'Margaret Atwood',
      price: 29,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
    {
      id: 20,
      title: 'City of Dreams',
      author: 'F. Scott Fitzgerald',
      price: 26,
      cover: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '', cover: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setNewBook({ title: '', author: '', price: '', cover: '' });
  };

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    if (!newBook.title || !newBook.author || !newBook.price || !newBook.cover) {
      alert('Please fill all fields!');
      return;
    }

    if (isNaN(newBook.price) || newBook.price <= 0) {
      alert('Please enter a valid price!');
      return;
    }

    const book = { ...newBook, id: books.length + 1, price: parseFloat(newBook.price) };
    setBooks([...books, book]);
    handleClose();
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
