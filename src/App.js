import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = "https://api.spoonacular.com/recipes/random?";
//const API_KEY = "136fc3acefd2479fb671a2d84bb2ebd1";
const API_KEY = "b4408aa9ab144e47ae2bf8eff93e72f5";


function App() {
  
 
  
  const [summary, setSummary] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [vegetarian, setVegetarian] = useState('')
  //const [criteria, setCriteria] = useState('')
  
  
  useEffect(() => {
    
    const address = URL + "&apiKey=" + API_KEY;
    console.log(address);
  
   
  }, [])

  console.log(summary);

  function getRecipe(e) {
    e.preventDefault()
    let address = URL + "&apiKey=" + API_KEY

    if (vegetarian == "checked") {
      address = URL + "&tags=vegeterian" +"&apiKey=" + API_KEY;
    }
    console.log(address);
  
    axios.get(address)
      .then((response) => {
      
        
        setSummary(response.data.recipes[0].summary);
        setTitle(response.data.recipes[0].title);
        setImage(response.data.recipes[0].image);
       
      }).catch(error => {
        alert(error)
      }) 
    
    

  }
 

  return (
    <div>
      <h2>Recipe of the day:</h2>
      
      <form onSubmit={getRecipe}>
        <h5>food limitations:</h5>
        <div>
          
          <input type="checkbox" name="vegetarian" value={vegetarian} onChange={e => setVegetarian(e.target.checked)} />
          <label for="vegetarian">Vegetarian</label>
        </div>

        <div>
          <input type="checkbox" id="dairyfree" name="dairyfree" />
          <label for="dairyfree">Dairyfree</label>
        </div>
       
        <button>Get recipe</button>
      </form>
        
      
      
      <h3>{title}</h3>

      <p>{summary}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default App;
