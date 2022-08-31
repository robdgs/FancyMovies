import { useState} from "react";
import MovieEntity from './components/MovieEntity'
import MainSection from './components/MainSection'
import MainInput from './components/MainInput'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("345678");

  return (
    <div className="App">
      <Navbar />
      <MovieEntity movieID={inputValue}/>
      <MainInput setInputValue={setInputValue} />
      <MainSection />
    </div>
  );
}

export default App;
