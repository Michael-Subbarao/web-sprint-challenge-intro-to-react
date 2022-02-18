import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters,setCharacters] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people`)
    .then(response =>{
      console.log(response.data);
      //Data is held within body array of Response object
      setCharacters(response.data)
      console.log(characters);
    })
    .catch(error => console.log(error));
  },[])
  return (
    <div className="App">
      {
      characters.map((character)=>{
        return <Character character = {character}/>
      })
    }
    </div>
  );
}
export default App;
