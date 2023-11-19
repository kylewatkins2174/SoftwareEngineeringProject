import {React, useContext, useEffect, useState} from 'react';
import './tradeCenter.scss';
import {AuthContext} from "../contexts/authContext.js"
import requestServer from '../axios';

const TradeCenter = () => { 
  const {userValues} = useContext(AuthContext)
  const [items, setItems] = useState()
  const [loading, setLoading] = useState(true)


  const getBooks = async() => {
    try{
      const res = await requestServer.post("http://localhost:8800/api/trade/getUserBooks", {"userid":1})
      setItems(res.data)
    }catch(error){
      
    }
  }

  useEffect(() => {
    console.log("change to user in tradecenter " + JSON.stringify(userValues))
    getBooks()
    console.log(JSON.stringify(items))

    if(items !== undefined){
      setLoading(false)
    }
  }, [userValues])

    const renderItem = (data) =>{
      try{
        if(data.itemtype === "book"){
          return(
            <div>
              <p>{data.itemtype}</p>
              <p>{data.title}</p>
              <p>{data.author}</p>
              <p>{data.descr}</p>
              <p>{userValues.username}</p>
              <hr/>
            </div>
          )
        }
        if(data.itemType === "movie"){
          return(
            <div>
              <p>{data.itemType}</p>
              <p>{data.itemName}</p>
              <p>{data.director}</p>
              <p>{data.itemOwner}</p>
              <hr/>
            </div>
          )
        }
        return(
          <p>error</p>
        )
      }catch(error){
        console.log(error)
      }

    }

    if(loading){
      console.log("loading..")
      return<p>loading...</p>
    }
    else{
      return (
        <div>
          {items.map((item) => (
            <div>
              {renderItem(item)}
            </div>
          ))}
        </div>
      );
    }


};

export default TradeCenter;