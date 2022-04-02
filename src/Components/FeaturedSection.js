import React from "react";

export default function FeaturedSection({ bookData }) {
  return (
    <div>
      <div>Featured</div>
      {bookData.map((book, i) => {
        if (i <= 2)
          return (
            <div>
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
