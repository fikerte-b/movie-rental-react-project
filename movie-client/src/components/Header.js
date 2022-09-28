import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <div classname="header">
      <div className="headerContainer">
        <div className="search">
          <div className="searchMovie">
            <FontAwesomeIcon
              className="searchIcon"
              icon="fa-duotone fa-magnifying-glass "
            />
            <input
              type="text"
              placeholder="search movies......"
              className="searchInput"
            />
          </div>
          <div className="searchMovie">
            <button className="searchBtn">Search</button>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Header;
