const express = require("express");
const cors = require("cors");

const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("📚 ShareMyBook API is running...");
});

module.exports = app;
