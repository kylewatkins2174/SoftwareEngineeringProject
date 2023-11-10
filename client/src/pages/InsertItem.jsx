import { useState, useEffect } from 'react';

function AddItemToLibrary() {
  const [item, setItem] = useState("Book")


  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const displayFields = () => {
    console.log(item)

    if(item === "Book"){
      return(
        <div>
          <label htmlFor="Book_Title">Book Title:</label>
          <input type="text" id="Book_Title" name="Book_Title"/><br/><br/>
          <label htmlFor="Book_Author">Author:</label>
          <input type="text" id="Book_Author" name="Book_Author"/><br/><br/>
          <label htmlFor="Book_Vol">Vol./Addition:</label>
          <input type="text" id="Book_Vol" name="Book_Vol"/><br/><br/>
        </div>
      )
    }else if(item === "CD"){
      return(
        <div>
          <label htmlFor="CD_Artist">CD Artist/Band:</label>
          <input type="text" id="CD_Artist" name="CD_Artist"/><br/><br/>
          <label htmlFor="CD_Album">CD Album:</label>
          <input type="text" id="CD_Album" name="CD_Album"/><br/><br/>
        </div>
      )
    }else if(item === "Movie"){
      return(
        <div>
          <label htmlFor="Movie_Title">Movie Title:</label>
          <input type="text" id="Movie_Title" name="Movie_Title"/><br/><br/>
        </div>
      )
    }else if(item === "Vinyl"){
      return(
        <div>
          <label htmlFor="Vinyl_Artist">Artist/Band:</label>
          <input type="text" id="Vinyl_Artist" name="Vinyl_Artist"/><br/><br/>
          <label htmlFor="Vinyl_Album">Album:</label>
          <input type="text" id="Vinyl_Album" name="Vinyl_Album"/><br/><br/>
        </div>
      )
    }

  }


  return (
    <div>
      <h1>Add Item to Library</h1>

      
        <label htmlFor="item_list">Select Item:</label>
        <select id="item_list" name="item_list" onChange={handleChange}>
          <option value="Book">Book</option>
          <option value="Movie">Movie</option>
          <option value="CD">CD</option>
          <option value="Vinyl">Vinyl</option>
        </select><br/><br/>

        <div id="additional_fields">
          {displayFields()}
        </div>

        <input type="submit" value="Submit"/>
      
    </div>
  );
}

export default AddItemToLibrary;
