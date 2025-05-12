import React, { useState } from 'react';
import { Button, Container, Row, Col, Card, Form, Carousel, Modal } from 'react-bootstrap';
import { FaBookOpen, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  // Handle Modal visibility
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    // Handle the blog submission logic here (like API call to save the blog)
    console.log('Blog Submitted:', { blogTitle, blogContent });
    handleCloseModal();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h1>
                <FaBookOpen /> Welcome to ShareMyBook 📚
              </h1>
              <p>
                Your personal hub to donate, share, and discover books within your community.
                Let’s spread the joy of reading together!
              </p>
              <Button variant="primary" size="lg" href="/register">
                🚀 Get Started
              </Button>
              <Button variant="outline-primary" size="lg" href="/login" className="ms-3">
                🔑 Login
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <h2>✨ Key Features</h2>
          <Row>
            <Col md={3}>
              <div className="feature-col">
                <h5>📖 Discover Books</h5>
                <p>Search for books shared by others nearby.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="feature-col">
                <h5>🤝 Share Easily</h5>
                <p>List your books to share or donate with one click.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="feature-col">
                <h5>🚚 Request & Receive</h5>
                <p>Request a book and get it delivered to your doorstep.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="feature-col">
                <h5>📦 Track Donations</h5>
                <p>See the impact you've made through your donations.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Most Shared Books Section */}
      <section className="books-section">
        <Container>
          <h2>🔥 Most Shared Books</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="book-card h-100">
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg" />
                <Card.Body>
                  <Card.Title>Atomic Habits</Card.Title>
                  <Card.Text>A practical guide to building good habits.</Card.Text>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span> (120 users)
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="book-card h-100">
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71UwSHSZRnS.jpg" />
                <Card.Body>
                  <Card.Title>The Subtle Art of Not Giving a F*ck</Card.Title>
                  <Card.Text>Brutally honest self-help advice.</Card.Text>
                  <div className="rating">
                    <span>⭐⭐⭐⭐</span> (95 users)
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="book-card h-100">
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg" />
                <Card.Body>
                  <Card.Title>Ikigai</Card.Title>
                  <Card.Text>Discover the Japanese secret to a long, happy life.</Card.Text>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span> (110 users)
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <Container>
          <h2>💬 What Users Say</h2>
          <Carousel>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"This platform helped me declutter and share stories with others. Love it!"</p>
                <footer className="blockquote-footer">Aditi, Student</footer>
              </blockquote>
            </Carousel.Item>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"I've received 5 amazing books from people nearby. Great initiative!"</p>
                <footer>Rahul, Engineer</footer>
              </blockquote>
            </Carousel.Item>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"This platform helped me declutter and share stories with others. Love it!"</p>
                <footer className="blockquote-footer">Aditi, Student</footer>
              </blockquote>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <Container>
          <h2>📰 Subscribe to Our Newsletter</h2>
          <Form>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <Button variant="primary" className="mt-3">Subscribe</Button>
          </Form>
        </Container>
      </section>

      {/* Blog Section with Submit Blog Button */}
      <section className="blog-section">
        <Container>
          <h2>📚 Read Our Blog</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <a href="/blog/sharing-books" className="blog-link">
                      Why Sharing Books is Important
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Learn why sharing books can change the way we read and make a positive impact on society.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <a href="/blog/building-community" className="blog-link">
                      Building a Reading Community
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Discover how book sharing brings people together and fosters lasting relationships.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <a href="/blog/sustainable-reading" className="blog-link">
                      Sustainable Reading Habits
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Learn how sharing books contributes to an eco-friendly and sustainable reading culture.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <a href="/blog/best-books-to-share" className="blog-link">
                      Top 10 Books People Love to Share
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Explore a list of the most popular shared books that everyone should read at least once.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <a href="/blog/how-to-donate-books" className="blog-link">
                      How to Donate Books the Right Way
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Step-by-step tips on preparing your books for donation and making the biggest impact.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <a href="/blog/reading-habits-in-digital-age" className="blog-link">
                      Reading Habits in the Digital Age
                    </a>
                  </Card.Title>
                  <Card.Text>
                    How technology is changing the way we read — and how book sharing keeps print alive.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button variant="success" onClick={handleShowModal} className="mt-4">
            ✍️ Submit Your Blog
          </Button>
        </Container>
      </section>

      {/* Blog Submission Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Your Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBlogSubmit}>
            <Form.Group className="mb-3" controlId="blogTitle">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogContent">
              <Form.Label>Blog Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your blog content here..."
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Blog
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
  <Container>
    <h2 className="text-center mb-4">❓ Frequently Asked Questions</h2>
    <Row className="justify-content-center">
      <Col md={8}>
        <div className="mb-4">
          <h5 className="fw-bold">Q: How do I share books?</h5>
          <p className="text-muted">
            A: Go to the <strong>'Share'</strong> section, list the books you wish to share, and wait for requests from interested readers.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-bold">Q: How do I request a book?</h5>
          <p className="text-muted">
            A: Use the search bar to find available books nearby and send a request to the book owner directly from the platform.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-bold">Q: Is there any cost involved in sharing or requesting books?</h5>
          <p className="text-muted">
            A: No, sharing and requesting books is completely free. You may only pay for delivery if you opt for courier service.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-bold">Q: Can I track the status of my shared books?</h5>
          <p className="text-muted">
            A: Yes, you can view and manage all your shared books and requests from your dashboard.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-bold">Q: How do I contact the book owner or requester?</h5>
          <p className="text-muted">
            A: Once a request is approved, the system facilitates a secure way to coordinate delivery or pickup with the other user.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col md={4}>
              <p>About ShareMyBook</p>
            </Col>
            <Col md={4}>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="social-links">
                <FaFacebook /> <FaTwitter /> <FaInstagram />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
