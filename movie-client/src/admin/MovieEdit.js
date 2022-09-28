function MovieEdit({ editMovie, onChangeEditHandler }) {
  return (
    <tr>
      <td><input type="text" name="name" placeholder="Movie name" value={editMovie.name} onChange={onChangeEditHandler} /></td>
      <td><input type="text" name="releasedate" placeholder="Release date" value={editMovie.releasedate} onChange={onChangeEditHandler}/></td>
      <td><input type="text" name="price" placeholder="Price per hr" value={editMovie.price} onChange={onChangeEditHandler}/></td>
      <td><input type="text" name="rating" placeholder="Ratings..." value={editMovie.rating} onChange={onChangeEditHandler}/></td>
      <td><input type="text" name="description" placeholder="Description" value={editMovie.description} onChange={onChangeEditHandler}/></td>
      <td><input type="text" name="image" placeholder="image" value={editMovie.image} onChange={onChangeEditHandler}/></td>
      <td>
        <button type="submit">save</button>
      </td>
    </tr>

  );
}

export default MovieEdit;
