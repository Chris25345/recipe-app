import './App.css';
import {useEffect, useState} from 'react';
import { Recipe } from './Recipe';

function App() {
  const APP_ID = 'f8a5cb75';
  const APP_KEY = 'b81721b26607e591ad49a5f834757fdc';
  // const example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }

  useEffect(() => {
    getRecipes();
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(el => (
        <Recipe 
        title={el.recipe.label} 
        calories={el.recipe.calories} 
        img={el.recipe.image} 
        key={el.recipe.label}
        ingredients={el.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
