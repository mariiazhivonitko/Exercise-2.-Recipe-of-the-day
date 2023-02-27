import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = "https://api.spoonacular.com/recipes/random?";
const API_KEY = "136fc3acefd2479fb671a2d84bb2ebd1";


function App() {
  
 
  
  const [summary, setSummary] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  
  useEffect(() => {
    
    const address = URL + "number&apiKey=" + API_KEY;
    console.log(address);
  
    axios.get(address)
      .then((response) => {
      
        
        setSummary(response.data.recipes[0].summary);
        setTitle(response.data.recipes[0].title);
        setImage(response.data.recipes[0].image);
       
      }).catch(error => {
        alert(error)
      })   
  }, [])

  console.log(summary);
 

  return (
    <div>
      <h2>Recipe of the day:</h2>
      
      <form>
        <h5>food limitations:</h5>
        <div>
          <input type="checkbox" id="glutenfree" name="glutenfree" />
          <label for="glutenfree">Glutenfree</label>
        </div>

        <div>
          <input type="checkbox" id="dairyfree" name="dairyfree" />
          <label for="dairyfree">Dairyfree</label>
        </div>
        <div>
          <input type="checkbox" id="vegan" name="vegan" />
          <label for="vegan">Vegan</label>
        </div>
        <button type='submit'>Get recipe</button>
      </form>
        
      
      
      <h3>{title}</h3>
      <p>{summary}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default App;
