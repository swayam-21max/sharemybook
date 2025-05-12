// controllers/authController.js
exports.registerUser = (req, res) => {
    const { name, email, password } = req.body;

    console.log(name, email, password);
    
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    // In production, add password hashing & DB save logic
    return res.status(201).json({
      message: 'User registered successfully',
      user: { name, email }
    });
  };
  