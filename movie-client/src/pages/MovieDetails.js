import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});



const params = useParams();
const navigate = useNavigate()



  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    
    const fetchMovie = async () => {
      const res = await axios.get(`http://localhost:8080/movies/${params._id}`);
      setMovie(res.data);
      setLoading(false);
      
    };
    fetchMovie();
  });
  //console.log(movie, "......from details");

  return (loading ? (
    <h4>Loading.....</h4>
  ) : (
    <div style={{backgroundColor:"lightblue"}}>
      <h1>Release Date:</h1>
      <h4>{movie.releasedate}</h4>
      <h1>Description:</h1>
      <h4>{movie.description}</h4>
      <button onClick={onClickHandler}>Back</button>
    </div>

  )
)
}

export default MovieDetails;
