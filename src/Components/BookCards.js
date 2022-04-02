import React, { useEffect, useState } from "react";
import classnames from '../utils/classnames.json'


export default function BookCards({bookData}) {
    const [className, setClassName] = useState(classnames)

    useEffect(() => {
        const data = window.localStorage.getItem('HIGHLITED_BOOK_CARD')
        setClassName(JSON.parse(data))
    }, [])
    
  

    useEffect(()=>{
        window.localStorage.setItem('HIGHLITED_BOOK_CARD', JSON.stringify(className))
    },[className])

    const clickedBook = (i) => {
        setClassName((prev)=>{
            const newObj = {...prev}
            if(prev[`${i}`] == "bookcardmain"){
                newObj[`${i}`] = "bookcardmainclicked"
                localStorage.getItem(`bookcardmain${i}`);
                return newObj
            }
            newObj[`${i}`] = "bookcardmain"
            localStorage.getItem(`bookcardmain${i}`);
            return newObj

    })
}


  return (
    <div className="bookcardmaindiv">
      {bookData.map((book, i) => {
        return (
          <div className={className[`${i}`]} onClick={()=>{clickedBook(i)}}>
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
