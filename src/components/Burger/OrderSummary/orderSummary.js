import { useEffect } from "react";
import Aux from "../../../hoc/Wrapper/wrapper";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  useEffect(() => {
  }, []);
  return (
    <Aux>
      <h3>
        Your Delicious Burger is ready below are the ingredients selected by you
      </h3>
      <ul>
        {Object.keys(props.summary).map((value, key) => {
          return <li key={key}>{`${value}:${props.summary[value][1]}`}</li>;
        })}
      </ul>
      <strong>Total Price : ${props.totalPrice.toFixed(2)}</strong>
      <h3>Proceed to Checkout ?</h3>
      <Button
        btnType="Danger"
        clicked={() => {
          props.setPurchasable(false);
        }}
      >
        CANCEL
      </Button>
      <Button
        btnType="Success"
        clicked={() => {
          alert("Manga bhi lae ba laude kitna bachaayega");
        }}
      >
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
