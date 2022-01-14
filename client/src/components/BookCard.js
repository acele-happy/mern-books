import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const BookCard= (props)=>{
    const book= props.book

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            {/* <div className="desc"></div> */}

            <div className="dec">
                <h6>
                    <Link to={`/show-book/${book._id}`}>
                        {book.title}
                    </Link>
                </h6>
                <p>{book._id}</p>
                <p>{book.author}</p>
                <p>{book.description}</p>
            </div>
        </div>
    )
}

export default BookCard