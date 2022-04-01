import Title from './Components/Title';
import './App.css';
import IntroSection from './Components/IntroSection';
import BookCards from './Components/BookCards';
import Socials from './Components/Socials';

function App() {
  return (
    <div className="App">
     <Title/>
     <IntroSection/>
     <BookCards/>
     <Socials/>
    </div>
  );
}

export default App;
