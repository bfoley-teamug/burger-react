import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  //to turn ingredients object into array and then map
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    //arrays within arrays, use reduce to flatten arrays
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add burger things to your burger</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>

  );
}

export default burger;
