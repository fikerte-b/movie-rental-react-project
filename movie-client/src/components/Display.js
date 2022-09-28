import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../styles/display.css";
// import   movie2  from "../assets/movie2.jpg"
function Display() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    // const onClickHandler =(event)=>{
    //    event.preventDefault();
    //     alert("thank you for renting Enjoy your movie")
    // we can transfer a state from one comp to the linked one by
    // navigate("/rent", {state: {movies}});
    // navigate("/rent/:id");

    // }
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get('http://localhost:8080/movies');
          setMovies(response.data);
        } catch (err) {
          setError(err);
        }
      setIsLoading(false);
      };
      fetchData();
    }, []);
    console.log(movies);
    return ( 
        <div className="display">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {movies.map((movie) => (
            <div className="displayMovie" key={movie._id}>
              <img
                 src={movie.image}
                //  src={movie2}
                // src= "https://m.media-amazon.com/images/I/71fxsKr1MQL._AC_UY436_FMwebp_QL65_.jpg"
                alt="poster"
                className="displayImg"
              />
              <div>
              <h6 className="diplayName">Name:{movie.name}</h6>
              <h6 className="displayPrice">Price:{movie.price}</h6>
              <h6 className="displayRating">Ratings: {movie.rating}</h6>
              {/* <h6 className="displayReleasedate">ReleaseDate:{movie.releasedate}</h6>
              <h6 className="displayDesc">Description:{movie.description}</h6> */}
              <p><Link to={`./movie/${movie._id}`}> View Details</Link></p>
             {/* <button className="displayRentbtn" onClick={onClickHandler}>Rent here</button> */}
             <p><Link to={`./rent/${movie._id}`}> Rent here</Link></p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
        
    // <div className="display">
    //     <div className="displayMovie">
    //          work on the logo to right later
    //     <div className="form-group col-md-5 inputToright">
    //        <img className="img-fluid 100" src={movie2} alt="logo" />
    //     </div>
    //         <img src="https://m.media-amazon.com/images/I/91I3nMaJb-L._AC_UY436_FMwebp_QL65_.jpg" 
    //         alt="movie"
    //         className="displayImg"/>
    //         <div className="displayTitles">
    //             <h4>Me before you</h4>
    //             <h4>price:3.99</h4>
    //             <h4>ratings:10</h4>
    //         </div>
    //     </div>
    //     <div className="displayMovie">
    //         <img src="https://m.media-amazon.com/images/I/71fxsKr1MQL._AC_UY436_FMwebp_QL65_.jpg" 
    //         alt="movie"
    //         className="displayImg"/>
    //         <div className="displayTitles">
    //             <h4>Me before you</h4>
    //             <h4>price:9.99</h4>
    //             <h4>ratings:10</h4>
    //         </div>
    //     </div>
    //     <div className="displayMovie">
    //         <img src="https://m.media-amazon.com/images/I/51mXzW+B2GL._AC_UY436_FMwebp_QL65_.jpg"
    //          alt="movie"
    //          className="displayImg"/>
    //         <div className="displayTitles">
    //             <h4>Breaking Bad</h4>
    //             <h4>price:19.99</h4>
    //             <h4>ratings:10</h4>
    //         </div>
    //     </div>
    //     <div className="displayMovie">
    //         <img src="https://m.media-amazon.com/images/I/81B39au2-zL._AC_UY436_FMwebp_QL65_.jpg"
    //          alt="movie"
    //          className="displayImg"/>
    //         <div className="displayTitles">
    //             <h4>Breaking Bad</h4>
    //             <h4>price:5.99</h4>
    //             <h4>ratings:10</h4>
    //         </div>
    //     </div>
        
    // </div> 
    );
}

export default Display;
