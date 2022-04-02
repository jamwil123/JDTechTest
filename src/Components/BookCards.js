import React, { useEffect, useState } from "react";


export default function BookCards({bookData}) {
 

  return (
    <div className="bookcardmaindiv">
      {bookData.map((book) => {
        return (
          <div className="bookcardmain">
            <div>
              <img
                className="bookimg"
                src={book.volumeInfo.imageLinks.thumbnail}
              />
            </div>

            <div className="cardtext">
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
          </div>
        );
      })}
    </div>
  );
}
