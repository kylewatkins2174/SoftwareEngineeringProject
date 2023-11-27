import { useState, useEffect, useContext } from 'react'
import requestServer from "../axios"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext'

function AddItemToLibrary() {
  const navigate = useNavigate()
  const {userValues} = useContext(AuthContext)
  const [item, setItem] = useState("Book")
  const [inputs, setInputs] = useState({
    "userid" : userValues.userid,
    "title": "",
    "author": "",
    "descr": "",
    "title": "",
    "director": "",
    "description":"",
    "artist": "",
    "title": "",
    "descr": "",
    "artist": "",
    "title": "",
    "descr": ""
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
          inputs.title.trim() !== "" &&
          inputs.author.trim() !== "" &&
          inputs.descr.trim() !== ""
        );

      case "CD":
        return (
          inputs.artist.trim() !== "" &&
          inputs.title.trim() !== "" &&
          inputs.descr.trim() !== ""
        );

      case "Movie":
        return (
          inputs.title.trim() !== "" &&
          inputs.director.trim() !== "" &&
          inputs.descr.trim() !== ""
        );

      case "Vinyl":
        return (
          inputs.artist.trim() !== "" &&
          inputs.title.trim() !== "" &&
          inputs.descr.trim() !== ""
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

    console.log(JSON.stringify(inputs))
    const { isValid} = validateInputs()
    if (isValid) {
      console.log("Form submitted:", inputs)
    } else {
      setErr("Please fill out all required fields")
    }
    try{
      const endpoint = `/inventory/insert${item}`;
      requestServer.post(endpoint, inputs).then(response => {
          console.log(response)
          navigate("/home")
      }).catch(err => {
          console.log(`Error on Insert ${item} page:`)
          setErr(`Error inserting ${item.toLowerCase()}`)
      })
  }catch(error){
      console.log("error on Insert Item page2")
      setErr("error")
  }

  }


  const displayFields = () => {
    if (item === "Book") {
      return (
        <div>
          <label htmlFor="title">Book Title:</label>
          <input name="title" type="text" onChange={handleChar} /><br /><br />

          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" onChange={handleChar} /><br /><br />

          <label htmlFor="descr">Description:</label>
          <input type="text" id="descr" name="descr" onChange={handleChar} /><br /><br />
        </div>
      );
    } else if (item === "CD") {
      return (
        <div>
          <label htmlFor="artist">CD Artist/Band:</label>
          <input type="text" id="artist" name="musician" onChange={handleChar} /><br /><br />
          <label htmlFor="album">Album:</label>
          <input type="text" id="album" name="title" onChange={handleChar} /><br /><br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" onChange={handleChar} /><br /><br />
        </div>
      );
    } else if (item === "Movie") {
      return (
        <div>
          <label htmlFor="title">Movie Title:</label>
          <input type="text" id="title" name="title" onChange={handleChar} /><br /><br />
          <label htmlFor="director">Director :</label>
          <input type="text" id="director" name="director" onChange={handleChar} /><br /><br />
          <label htmlFor="descr">Description:</label>
          <input type="text" id="descr" name="description" onChange={handleChar} /><br /><br />
        </div>
      );
    } else if (item === "Vinyl") {
      return (
        <div>
          <label htmlFor="artist">Artist/Band:</label>
          <input type="text" id="artist" name="musician" onChange={handleChar} /><br /><br />
          <label htmlFor="title">Album:</label>
          <input type="text" id="title" name="title" onChange={handleChar} /><br /><br />
          <label htmlFor="descr">Description:</label>
          <input type="text" id="descr" name="description" onChange={handleChar} /><br /><br />
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