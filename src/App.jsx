import MovieEntity from './components/MovieEntity'
import { useState} from "react";
import MainInput from './components/MainInput'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("345678");

  return (
    <div className="App">
      <MainInput setInputValue={setInputValue} />
      <MovieEntity movieID={inputValue}/>
    </div>
  );
}

export default App;
