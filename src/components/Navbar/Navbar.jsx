import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list--right">
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
