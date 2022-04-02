import Title from './Components/Title';
import './App.css';
import IntroSection from './Components/IntroSection';
import BookCards from './Components/BookCards';
import Socials from './Components/Socials';
import BurgerMenu from './Components/BurgerMenu';
import PageSelector from './Components/PageSelector';
import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedSection from './Components/FeaturedSection';
import FeaturedMobile from './Components/FeaturedMobile'

function App() {

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get(` https://www.googleapis.com/books/v1/volumes?q=HTML5`)
      .then(({ data }) => {
        setBookData(data.items);
      });
  }, []);

  return (
    <div className="App">
     <Title/>
     <BurgerMenu className='burgermenuMain'/>
     <PageSelector/>
     <IntroSection/>
     <FeaturedMobile bookData={bookData} />
     <div className='cardSectionMain'>
     <BookCards bookData={bookData}/>
     <FeaturedSection bookData={bookData} />
     </div>
     <Socials/>
    </div>
  );
}

export default App;
