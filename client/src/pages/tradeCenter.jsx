import {React, useContext, useEffect, useState} from 'react';
import './tradeCenter.scss';
import {TradeWindow} from '../components/tradeWindow.jsx'
import requestServer from '../axios';
import { AuthContext } from '../contexts/authContext.js';

const TradeCenter = () => { 
  const [option, setOption] = useState("Book")
  const [windowVisible, setWindowVisible] = useState(false)
  const [items, setItems] = useState()
  const [itemToTrade, setItemToTrade] = useState()
  const [loading, setLoading] = useState(true)
  const {userValues} = useContext(AuthContext)

  useEffect(() => {
    getItems()
  }, [option])

  const getItems = async() => {
    if(option === "Book"){
      try{
        const res = await requestServer.post("http://localhost:8800/api/trade/getBooks",{userid: userValues.userid})
        setItems(res.data)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }
    else if(option === "Movie"){
      try{
        const res = await requestServer.post("http://localhost:8800/api/trade/getMovies", {userid: userValues.userid})
        setItems(res.data)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }
    else if(option === "Vinyl"){
      console.log("getting vinyls")

      try{
        const res = await requestServer.post("http://localhost:8800/api/trade/getVinyls", {userid: userValues.userid})
        setItems(res.data)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }
    else if(option === "CD"){
      console.log("getting vinyls")

      try{
        const res = await requestServer.post("http://localhost:8800/api/trade/getCDs", {userid: userValues.userid})
        setItems(res.data)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }
  }

  const renderItem = (data) =>{
    try{
      if(option === "Book"){
        return(
          <div className='trade-center-div'>
            <h3>{data.title}</h3>
            <p>Author: {data.author}</p>
            <p>Description: {data.descr}</p>
            <p>Owned by: {data.username}</p>
          </div>
        )
      }
      if(option === "Movie"){
        return(
          <div className='trade-center-div'>
            <h3>{data.title}</h3>
            <p>Director: {data.director}</p>
            <p>Description: {data.descr}</p>
            <p>Owned by: {data.username}</p>
          </div>
        )
      }
      if(option === "Vinyl"){
        return(
          <div className='trade-center-div'>
            <h3>{data.title}</h3>
            <p>Artist: {data.artist}</p>
            <p>Description: {data.descr}</p>
            <p>Owned by: {data.username}</p>
          </div>
        )
      }
      if(option === "CD"){
        return(
          <div className='trade-center-div'>
            <h3>{data.title}</h3>
            <p>Artist: {data.artist}</p>
            <p>Description: {data.descr}</p>
            <p>Owned by: {data.username}</p>
          </div>
        )
      }

      console.log(option)
      return(
        <p>error</p>
      )
    }catch(error){
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setOption(e.target.value)
    console.log(option)
  }

  const handleClick = (item) => {
    setItemToTrade(item)
    setWindowVisible(true)
  }

  const updateVisibility = () => {
    setWindowVisible(!windowVisible)
  }

  if(loading){
    return<p>loading...</p>
  }
  else{
    return (
      <div>

        <TradeWindow isVisible={windowVisible} updateVisibility={updateVisibility} itemToTrade = {itemToTrade} itemType={option}/>

        <select onChange={handleChange}>
          <option value="Book">Books</option>
          <option value="Movie">Movies</option>
          <option value="Vinyl">Vinyls</option>
          <option value="CD">CDs</option>
        </select>



        {items.map((item) => (
          <div key={item.itemName}>
            {renderItem(item)}
            <button key={item.itemName} value={item} onClick={() => handleClick({item})}>Request Trade</button>
            <hr/>
          </div>
        ))}

      </div>
    );
  }
};

export default TradeCenter;