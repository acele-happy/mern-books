
const Book = require('../models/book.model');

 CreateBook = async(req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a book",
    });
  }

   const book = await new Book(body);

  if (!book) {
    res.status(400).json({ success: false, error: err });
  }

  await book
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: book._id,
        message: "Book created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "book was not created",
      });
    });
};

GetBookById = async (req, res) => {
  try{
  let books =   await Book.findOne({ _id: req.params.id })
  return res.status(200).send(books);
  }
  catch(err){
    return res.status(400).send(err.message)
  }
};

GetBooks = (req, res, next) => {
  const body = req.body;
  Book.find({})
    .then((books) =>{
      return res.status(200).send(books)
      // if (!books.length) {
      //   return res.status(200).send(`No movies yet`);
      // }
  
      return res.status(200).send(books);
    })
    .catch((err) => console.log(err));
};

DeleteBook = async (req, res, next) => {
  await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!book) {
      return console.log(`book not found`);
    }
    return res.status(200).json({ success: true, data: book });
  }).catch((err) => console.log(err));
};

UpdateBook = async (req, res, next) => {

  let body= req.body
  try{
  let book= await Book.findByIdAndUpdate({_id: req.params.id})
    book.title = body.title
    book.isbn= body.isbn
    book.author=body.author
    book.published_date= body.published_date
    book.publisher= body.publisher
    book.description= body.description

    book.save()
    res.status(200).send(book)

  }catch(err){
    res.status(400).send("error!!"+err)
  }
  // await Book.findByIdAndUpdate({ _id: req.params.id }, (err, book) => {
  //     (book.title = body.title),
  //     (book.isbn = body.isbn),
  //     (book.published_date = body.published_date),
  //     (book.publisher = body.publisher),
  //     (book.description = body.description);

  //     book
  //     .save()
  //     .then(() => {
  //       return res.status(200).json({
  //         success: true,
  //         id: book._id,
  //         message: "book updated",
  //       });
  //     })
  //     .catch((error) => {
  //       return res.status(404).json({
  //         error,
  //         message: "book failed to update",
  //       });
  //     });
  // });
};

module.exports = {
  CreateBook,
  DeleteBook,
  UpdateBook,
  GetBookById,
  GetBooks,
};
