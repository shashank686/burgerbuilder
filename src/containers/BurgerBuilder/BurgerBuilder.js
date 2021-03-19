import Wrapper from "../../hoc/Wrapper/wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/orderSummary";
import Modal from "../../components/UI/Modal/Modal";
import price from "../../constants/burgerPrice";
import { useState } from "react";
const BurgerBuilder = () => {
  const priceOfIngredients = {
    salad: ["$0.5", "1pc"],
    meat: ["$1.5", "1pc"],
    cheese: ["$1", "1pc"],
    bacon: ["$2", "1pc"],
  };
  const [totalPrice, setTotalPrice] = useState(price);
  const [isPurchasable, setPurchasable] = useState(false);
  const [salad, setSaladQuantity] = useState(0);
  const [meat, setMeatQuantity] = useState(0);
  const [cheese, setCheeseQuantity] = useState(0);
  const [bacon, setBaconQuantity] = useState(0);

  const saladHandler = (flag) => {
    if (flag === 1) setSaladQuantity(salad + 1);
    else setSaladQuantity(salad - 1);
  };
  const meatHandler = (flag) => {
    if (flag === 1) setMeatQuantity(meat + 1);
    else setMeatQuantity(meat - 1);
  };
  const cheeseHandler = (flag) => {
    if (flag === 1) setCheeseQuantity(cheese + 1);
    else setCheeseQuantity(cheese - 1);
  };
  const baconHandler = (flag) => {
    if (flag === 1) setBaconQuantity(bacon + 1);
    else setBaconQuantity(bacon - 1);
  };

  const calculatePrice = (ingredient, flag) => {
    let instantPrice = priceOfIngredients[ingredient][0].slice(1);
    if (flag) setTotalPrice((current) => current + Number(instantPrice));
    else setTotalPrice((current) => current - Number(instantPrice));
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
      <Modal show={isPurchasable} setPurchasable={setPurchasable}>
        <OrderSummary
          summary={modifyYourBurger}
          setPurchasable={setPurchasable}
          totalPrice={totalPrice}
        />
      </Modal>
      <BuildControls
        modifyYourBurger={modifyYourBurger}
        price={calculatePrice}
        totalPrice={totalPrice}
        basePrice={price}
        setPurchasable={setPurchasable}
      />
    </Wrapper>
  );
};
export default BurgerBuilder;
