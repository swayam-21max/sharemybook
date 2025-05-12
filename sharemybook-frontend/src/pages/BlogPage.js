// src/pages/BlogPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../pages/blogData';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './BlogPage.css';

const BlogPage = () => {
  const { slug } = useParams(); // Get the blog slug from the URL
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <Container className="blog-page">
      <Row>
        <Col md={8} className="mx-auto">
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-date">Published on: {new Date().toLocaleDateString()}</p>
          
          {blog.images && blog.images.map((img, index) => (
            <Image key={index} src={img} alt={`Blog image ${index + 1}`} fluid className="blog-image" />
          ))}

          <div className="blog-content">
            <p>{blog.content}</p>

            {/* Example additional content */}
            <h3>The Community Impact</h3>
            <p>
              A reading community isn’t just a group of people reading the same book. It’s about forming connections and fostering a space where people can share ideas, opinions, and experiences.
              {blog.images && blog.images.length > 1 && <Image src={blog.images[1]} alt="Community impact" fluid className="blog-image" />}
            </p>

            <h3>Conclusion: Keep the Cycle Going</h3>
            <p>
              The beauty of sharing books is that it keeps giving, from one reader to the next. The more we share, the more knowledge spreads and communities are strengthened.
            </p>
            <p>Let’s keep the cycle going and make reading accessible to everyone!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
