import Card from "../UI/Card";
import classes from "../Meals/AvailableMeals.module.css";
import MealItem from "./MealItem/Mealitem";
import Data from "./MealItem/MealData.json";
import { useState } from "react";


const AvailableMeals = () => {
  const [query, setQuery] = useState("")
  const [value,setValue]=useState(false);
    
  const mealsList = Data.map((meal) => (
    <MealItem
      id={meal.id}
      title={meal.title}
      category={meal.category}
      price={meal.price}
      img={meal.img}
    />
  ));


  const dat1=
    Data.filter(post => {
      console.log("filter");
      if (query === '') {
        return post;
      } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
        return post;
      }
    }).map((meal, index) => {
      return(
      <MealItem
      id={meal.id}
      title={meal.title}
      category={meal.category}
      price={meal.price}
      img={meal.img}
    /> )   })
  

  return (
    
    <section className={classes.meals}>
       <h1>May i help you!!</h1>
     <div className="searchbaar"> 
       <input type= "text" placeholder="searchanything" onChange={event => setQuery(event.target.value)} />
     </div> 
      <Card>
        <ul>{dat1}</ul>
        {value && <ul>{mealsList}</ul>}

      </Card>
    </section>
  );
};
export default AvailableMeals;

