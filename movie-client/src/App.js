import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import MovieLists from "./pages/MovieLists";
import Movie from "./pages/Movie"
import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieDetails from "./pages/MovieDetails";
import Rent from "./pages/Rent";
import Admin from "./admin/Admin";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movies" element={<MovieLists/>}></Route>
      <Route path="/movies/:id" element={<Movie/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/movie/:id" element ={<MovieDetails/>}></Route>
      <Route path="/rent/:id" element ={<Rent/>}></Route>
      <Route path="/admin" element ={<Admin/>}></Route>
    </Routes>
   
  );
}

export default App;
