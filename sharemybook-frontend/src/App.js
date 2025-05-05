import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import Login from './pages/Login'; // Import the Login component
import Register from './pages/Register'; // Import the Register component
import BooksPage from './pages/BooksPage'; // Import the Books Page component
import NavBar from './components/NavBar'; // Import the NavBar component
import PaymentPage from './pages/PaymentPage'; // Correct path to PaymentPage
import BlogsPage from './pages/BlogPage'; // Import the Blogs Page component

function App() {
    return (
        <Router>
            <NavBar /> {/* Render the NavBar component */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<BooksPage />} /> {/* Books Page */}
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blog/:slug" element={<BlogsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
