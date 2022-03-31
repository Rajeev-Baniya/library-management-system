const express = require("express"),
      router = express.Router();


// Importing controller
const bookController = require('../controllers/books');

// Browse books
router.get("/books/:filter/:value/:page", bookController.getBooks);

// Fetch books by search value
router.post("/books/:filter/:value/:page", bookController.findBooks);

// Fetch individual book details
router.get("/books/details/:book_id", bookController.getBookDetails);

//get latest top 10 books
router.get("/", bookController.getTenBooks);



module.exports = router;