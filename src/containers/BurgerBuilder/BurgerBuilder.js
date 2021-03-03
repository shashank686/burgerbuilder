import Wrapper from "../../hoc/wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControls/BuildControl";
import { useState } from "react";
const BurgerBuilder = () => {
  const [salad, setSaladQuantity] = useState(0);
  const [meat, setMeatQuantity] = useState(0);
  const [cheese, setCheeseQuantity] = useState(0);
  const [bacon, setBaconQuantity] = useState(0);

  const saladHandler = (flag) => {
    if (flag === 1) setSaladQuantity(salad + 1);
    else {
      if (salad !== 0) setSaladQuantity(salad - 1);
    }
  };
  const meatHandler = (flag) => {
    if (flag === 1) setMeatQuantity(meat + 1);
    else {
      if (meat !== 0) setMeatQuantity(meat - 1);
    }
  };
  const cheeseHandler = (flag) => {
    if (flag === 1) setCheeseQuantity(cheese + 1);
    else {
      if (cheese !== 0) setCheeseQuantity(cheese - 1);
    }
  };
  const baconHandler = (flag) => {
    if (flag === 1) setBaconQuantity(bacon + 1);
    else {
      if (bacon !== 0) setBaconQuantity(bacon - 1);
    }
  };

  const modifyYourBurger = {
    salad: [saladHandler, salad],
    meat: [meatHandler, meat],
    cheese: [cheeseHandler, cheese],
    bacon: [baconHandler, bacon],
  };
  return (
    <Wrapper>
      <Burger salad={salad} meat={meat} cheese={cheese} bacon={bacon} />
      <BuildControl modifyYourBurger={modifyYourBurger} />
    </Wrapper>
  );
};
export default BurgerBuilder;
