
import styles from "./index.module.scss";

const Navbar = () => {
 


  return (
    <div className={styles.Navbar}>
      <ul className={styles.list}>
        <li>
          <a href="#main-section">Popular Films</a>
        </li>
        <li>
          <a href="#top-rated">Top Rated</a>
        </li>
      </ul>
     
   
    </div>
  );
};

export default Navbar;
