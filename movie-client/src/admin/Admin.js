import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import MovieEdit from "./MovieEdit";
import MovieList from "./MovieList";
//import "../styles/admin.css"

function Admin() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [addMovie, setAddMovie] = useState({
    name: "",
    releasedate: "",
    price: "",
    rating: "",
    description: "",
    image: "",
  });
  const [editMovieId, setEditMovieId] = useState(null);
  const [editMovie, setEditMovie] = useState({
    name: "",
    releasedate: "",
    price: "",
    rating: "",
    description: "",
    image: "",

  })

  const addMovieOnChangeHandler = (event) => {
    setAddMovie((prev) => ({ ...prev, [event.target.name]: event.target.value,}));
    console.log(addMovie);
  };

  const addNewMovieOnClickHandler = (e) => {
    e.preventDefault();
    // const newMovie = {
    //   // id: addMovie._id,
    //   name: addMovie.name,
    //   releasedate: addMovie.releasedate,
    //   price: addMovie.price,
    //   rating: addMovie.rating,
    //   description: addMovie.description,
    //   image: addMovie.image
    // };

    // const result = [...movies, newMovie];
    // setMovies(result)
    axios
      .post("http://localhost:8080/movies", addMovie)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      setMovies([...movies, addMovie])
    //console.log(newMovie);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/movies");
        setMovies(response.data);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  //console.log(movies);

  //for edit button......................
  const onChangeEditHandler =(event)=>{
     event.preventDefault();
    setEditMovie((prev) => ({ ...prev, [event.target.name]: event.target.value,}));
  }
 
  const onClickEditHandler = (event, movie)=> {
    //event.preventDefault();
    setEditMovieId(movie._id)
    const newEditValues ={
      name: addMovie.name,
      releasedate: addMovie.releasedate,
      price: addMovie.price,
      rating: addMovie.rating,
      description: addMovie.description,
      image: addMovie.image
    }
    setEditMovie(newEditValues);
  }

  const onSubmitEditHandler = (event, movie)=> {
    event.preventDefault();
    axios
    .put(`http://localhost:8080/movies/${movie._id}`, editMovie)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    const newMovies = [...movies];
    const index = movies.findIndex((m)=>m.id === movie._id)
    newMovies[index] = editMovie;
    setMovies(newMovies)
    setEditMovie(null)
  }

  const onClickDeleteHandeler = async (movie)=>{
    
    await axios.delete(`http://localhost:8080/movies/${movie._id}`)
      setMovies(movies.filter((m)=>m._id !== movie._id))
  }
  

  return (
    <>
      <form onSubmit={onSubmitEditHandler}>
        <Table  striped bordered hover>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Realease Date</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Description</th>
              <th>Poster</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <>
                {editMovieId === movie._id ? (
                  <MovieEdit  editMovie={editMovie} onChangeEditHandler={onChangeEditHandler}/>
                ) : (
                  <MovieList
                   movie={movie}
                   onClickEditHandler ={onClickEditHandler}
                   onClickDeleteHandeler={onClickDeleteHandeler}
                    />
                )}
              </>
            ))}
          </tbody>
        </Table>
      </form>
      <h2>Add a Movie</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Movie name"
          onChange={addMovieOnChangeHandler}
        />
        <input
          type="text"
          name="releasedate"
          placeholder="Release date"
          onChange={addMovieOnChangeHandler}
        />
        <input
          type="text"
          name="price"
          placeholder="Price per hr"
          onChange={addMovieOnChangeHandler}
        />
        <input
          type="text"
          name="rating"
          placeholder="Ratings..."
          onChange={addMovieOnChangeHandler}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={addMovieOnChangeHandler}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          onChange={addMovieOnChangeHandler}
        />
        <button onClick={addNewMovieOnClickHandler}>Add</button>
      </form>
    </>
  );
}

export default Admin;
