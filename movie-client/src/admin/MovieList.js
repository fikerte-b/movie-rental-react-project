

function MovieList({ movie, onClickEditHandler, onClickDeleteHandeler}) {
    return ( 
        <tr key={movie._id}>
         <td>{movie.name}</td>
         <td>{movie.releasedate}</td>
         <td>{movie.price}</td>
         <td>{movie.rating}</td>
         <td>{movie.description}</td>
         <td>{movie.image}</td>
         <td>
          <button onClick={(event)=> onClickEditHandler(event, movie)}>Edit</button>
          <button onClick={(event)=> onClickDeleteHandeler(event, movie._id)}>Delete</button>
         </td>
       </tr>
     );
}

export default MovieList;