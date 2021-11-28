import React from 'react'
import style from './recipe.module.css';
import { v4 } from 'uuid';

export const Recipe = ({title, calories, img, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li key={v4()}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories.toFixed()} kcal</p>
      <img src={img} alt="..." style={{marginBottom: '20px', borderRadius: '20px'}} />
    </div>
  )
}
