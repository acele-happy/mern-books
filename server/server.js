require('./models/mongodb')
const express = require('express');
const booksRoutes = require('./routes/book-routes')
const cors = require('cors')
const bodyParser= require('body-parser')

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/books',booksRoutes)

// app.post("/api/books/ha", (req,res)=>{
//     console.log(req.body)
//     return res.status(200).send("request received")
// })

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

// app.use(bodyParser.newUrlParse({extended: true}))

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));