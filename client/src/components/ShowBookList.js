import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/books")
      .then((res) => {
        console.log("Received data: " +res.data)
        this.setState({books: res.data});
      })
      .catch((err) => {
        console.log("Error from ShowBookList!"+err);
      });
  }

  render() {
    let books = this.state.books;
    // console.log("PrintBook: " + books);
    let bookList;

    if (!books) {
      bookList = "There is no book record!";
    } else {
      bookList = books?.map((book, index) => {
        return <BookCard book={book} key={index} />;
      });
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{bookList}</div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;
