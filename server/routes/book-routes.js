const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')


router.get('/:id',booksController.GetBookById)
router.put('/:id',booksController.UpdateBook)
router.delete('/:id',booksController.DeleteBook)
router.get('/',booksController.GetBooks)
router.post('/',booksController.CreateBook)

module.exports = router