const router = require('express').Router();
const bodyParser = require('body-parser');
const User = require('../models/User');
const Book = require('../models/Book');
const PhysicalBook = require('../models/PhysicalBook');
const mongoose = require( 'mongoose' );

router.use(bodyParser.json());
// router.use(bodyParser.urlencoded());

//GET all books
router.get('/', (req, res, next) => {
  Book.find({}).lean().exec( (err, books) => {
    if(err) {
      console.log(err);
      return res.status(500).send(err[0]);
    }
    res.send(books);
  });
});

//GET specific book
router.get('/:book_id', (req, res, next) => {
  Book.findById(req.params.book_id).lean().exec( (err, book) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err[0]);
    }
    res.send(book);
  })
});

//GET all books by specific user
router.get('/')

module.exports = router;
