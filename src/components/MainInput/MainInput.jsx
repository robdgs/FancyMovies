import { useEffect, useRef } from "react";
import styles from './index.module.scss';

const MainInput = ({setInputValue}) => {
  const inputRef = useRef(null);

  

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target[0].value);
  };
  
 

  return (
    <form className={styles.MainInput} onSubmit={onHandleSubmit}>
      <input
        ref={inputRef}
      
        type="text"
      />
      <button  type="submit">Search</button>
    </form>
  );
};

export default MainInput;
