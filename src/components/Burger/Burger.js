import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
const Burger = (props) => {
  let ingredients = {
    salad: props.salad,
    meat: props.meat,
    cheese: props.cheese,
    bacon: props.bacon,
  };
  // creating arrays inside arrays
  // first return function will execute so transformedingredient will only be intialized when it will be accessed first inside the return function
  // only objects or array of objects need to be looped array you can simply display it with its name
  // thats what happended inside return
  const transformedIngredients = Object.keys(ingredients)
    .map((igvalue) => {
      return [...Array(ingredients[igvalue])].map((_, igkey) => {
        return <BurgerIngredient key={igkey + igvalue} type={igvalue} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length === 0 ? (
        <p>Please Start Adding Ingredients!</p>
      ) : (
        transformedIngredients
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
