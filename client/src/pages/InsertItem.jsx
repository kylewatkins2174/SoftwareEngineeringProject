import { useState, useEffect } from 'react'


function AddItemToLibrary() {
  const [item, setItem] = useState("Book")
  const [inputs, setInputs] = useState({
    "Book_Title": "",
    "Book_Author": "",
    "Book_Description": "",
    "Movie_Title": "",
    "Movie_Director": "",
    "Movie_Description":"",
    "CD_Artist": "",
    "CD_Album": "",
    "CD_Description": "",
    "Vinyl_Artist": "",
    "Vinyl_Album": "",
    "Vinyl_Description": ""
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isMaxChar, setIsMaxChar] = useState(true)
  const [isMinChar, setIsMinChar] = useState(true)
  const [Err, setErr] = useState(null)

  useEffect(() => {
    setIsButtonDisabled(true)
  }, [])

  const handleChange = (e) => {
    setItem(e.target.value)
    setIsButtonDisabled(false)
  }

  

  const validateInputs = () => {
    switch (item) {
      case "Book":
        return (
          inputs.Book_Title.trim() !== "" &&
          inputs.Book_Author.trim() !== "" &&
          inputs.Book_Description.trim() !== ""
        );

      case "CD":
        return (
          inputs.CD_Artist.trim() !== "" &&
          inputs.CD_Album.trim() !== "" &&
          inputs.CD_Description.trim() !== ""
        );

      case "Movie":
        return (
          inputs.Movie_Title.trim() !== "" &&
          inputs.Movie_Director.trim() !== "" &&
          inputs.Movie_Description.trim() !== ""
        );

      case "Vinyl":
        return (
          inputs.Vinyl_Artist.trim() !== "" &&
          inputs.Vinyl_Album.trim() !== "" &&
          inputs.Vinyl_Description.trim() !== ""
        );

      default:
        return true;
    }
  }
    const handleChar = (e) => {
    const charLength = e.target.value
    const isLengthValid = charLength.length <= 255
    const isMinLength = charLength.length > 0
    setIsButtonDisabled(false)
    setIsMaxChar(isLengthValid)
    setIsMinChar(isMinLength)

    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { isValid} = validateInputs()
    if (isValid) {
      console.log("Form submitted:", inputs)
    } else {
      setErr("Please fill out all required fields")
    }
  }


  const displayFields = () => {
    if (item === "Book") {
      return (
        <div>
          <label htmlFor="Book_Title">Book Title:</label>
          <input name="Book_Title" type="text" onChange={handleChar} /><br /><br />

          <label htmlFor="Book_Author">Author:</label>
          <input type="text" id="Book_Author" name="Book_Author" onChange={handleChar} /><br /><br />

          <label htmlFor="Book_Description">Description:</label>
          <input type="text" id="Book_Description" name="Book_Description" onChange={handleChar} /><br /><br />
        </div>
      );
    } else if (item === "CD") {
      return (
        <div>
          <label htmlFor="CD_Artist">CD Artist/Band:</label>
          <input type="text" id="CD_Artist" name="CD_Artist" onChange={handleChar} /><br /><br />
          <label htmlFor="CD_Album">Album:</label>
          <input type="text" id="CD_Album" name="Album" onChange={handleChar} /><br /><br />
          <label htmlFor="CD_Description">Description:</label>
          <input type="text" id="CD_Description" name="CD_Description" onChange={handleChar} /><br /><br />
        </div>
      );
    } else if (item === "Movie") {
      return (
        <div>
          <label htmlFor="Movie_Title">Movie Title:</label>
          <input type="text" id="Movie_Title" name="Movie_Title" onChange={handleChar} /><br /><br />
          <label htmlFor="Movie_Director">Director :</label>
          <input type="text" id="Movie_Director" name="Movie_Director" onChange={handleChar} /><br /><br />
          <label htmlFor="Movie_Description">Description:</label>
          <input type="text" id="Movie_Description" name="Movie_Description" onChange={handleChar} /><br /><br />
        </div>
      );
    } else if (item === "Vinyl") {
      return (
        <div>
          <label htmlFor="Vinyl_Artist">Artist/Band:</label>
          <input type="text" id="Vinyl_Artist" name="Vinyl_Artist" onChange={handleChar} /><br /><br />
          <label htmlFor="Vinyl_Album">Album:</label>
          <input type="text" id="Vinyl_Album" name="Vinyl_Album" onChange={handleChar} /><br /><br />
          <label htmlFor="Vinyl_Description">Description:</label>
          <input type="text" id="Vinyl_Descriptiohn" name="Vinyl_Description" onChange={handleChar} /><br /><br />
        </div>
      );
    }
    return null;
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
      </select><br /><br />

      <div id="additional_fields">
        {displayFields()}
      </div>

      <button onClick={handleSubmit} disabled={isButtonDisabled || !isMaxChar || !isMinChar}>Submit</button>
      {isMaxChar||(
       <div className="error">
        You hit the maximum character limit
        </div>
      )}
      {isMinChar||(
       <div className="error">
        Please fill out all of the fields
        </div>
      )}
    </div>
  );
}
export default AddItemToLibrary;