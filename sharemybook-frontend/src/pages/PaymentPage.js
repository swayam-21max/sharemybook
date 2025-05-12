// PaymentPage.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { book } = location.state || {};  // Get book data from the previous page

  return (
    <Container className="mt-5">
      <h2>Payment for {book?.title}</h2>
      <p>Author: {book?.author}</p>
      <p>Price: ${book?.price}</p>
      <Button variant="success" onClick={() => alert('Payment Successful!')}>
        Complete Payment
      </Button>
    </Container>
  );
};

export default PaymentPage;
