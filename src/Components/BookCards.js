import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BookCards() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get(` https://www.googleapis.com/books/v1/volumes?q=HTML5`)
      .then(({ data }) => {
        setBookData(data.items);
        console.log(data.items[0]);
      });
  }, []);

  return (
    <div className="bookcardmaindiv">
      {bookData.map((book) => {
        return (
          <div className="bookcardmain">
            <img className="bookimg" src={book.volumeInfo.imageLinks.thumbnail} />
            <div className="book title">{book.volumeInfo.title}</div>
            <div>
              {book.volumeInfo.authors.map((author) => {
                return <p className="book author">{author}</p>;
              })}
            </div>
            <div>Pages: {book.volumeInfo.pageCount}</div>
            <div className="bookdesc">
              {book.volumeInfo.description.slice(0, 140) + "..."}
            </div>
          </div>
        );
      })}
    </div>
  );
}
