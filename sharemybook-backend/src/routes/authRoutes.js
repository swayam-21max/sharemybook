const express = require('express');
const router = express.Router();

// Dummy register route
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  res.status(201).json({
    message: "User registered successfully",
    user: { name, email }
  });
});

module.exports = router;
