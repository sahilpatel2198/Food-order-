import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContex from "../../store/cart-contex";
import classes from "../Layout/HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const[btnIsHighlighted,setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContex);
  const { items }=cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
const btnclasses = `${classes.button} ${btnIsHighlighted ? classes.bump :""}`;
 useEffect(()=>{
   if(items.length===0){
     return;
   }
 setBtnIsHighlighted(true);
 const timer = setTimeout (()=>{
   setBtnIsHighlighted(false);
 },300);
  return ()=>{
    clearTimeout(timer);
  };
 },[items]);
  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
