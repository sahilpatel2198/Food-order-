import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealitemForm from './MealitemForm';
import CartContex from '../../../store/cart-contex';
const MealItem = (props) => {
  const cartCtx = useContext(CartContex);
    const price = `$${props.price.toFixed(2)}`;
    const addItemToCartHandler = amount => {
     cartCtx.addItem({
       id: props.id,
       name: props.title,
       amount: amount,
       price: props.price,
       title: props.title,
       category: props.category,
       img: props.img
     })

     
    };
  return <li className={classes.meal}>
      <div>
      <div><h3>{props.name}</h3>
      <h3>{props.title}</h3>
      </div>

      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div style={{color : '#068a8a'}}>{props.category}</div>
    <div> <img style={{width: '150px'}} src={props.img}/></div>
      </div>
      <div>
        <MealitemForm onAddToCart={addItemToCartHandler}/>
      </div>
  </li>
  
};

export default MealItem;
