
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const BuildControls = (props) => {
  const buildControls = Object.keys(props.modifyYourBurger).map((igvalue) => {
    return (
      <BuildControl
        key={igvalue}
        label={igvalue}
        modifyYourBurger={props.modifyYourBurger}
        price={props.price}
      />
    );
  });
  const setOrder = () => {
    props.setPurchasable(true);
  };
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Current Price : ${props.totalPrice.toFixed(2)}</strong>
      </p>
      {buildControls}
      <button
        className={classes.OrderButton}
        disabled={props.totalPrice === props.basePrice ? true : false}
        onClick={setOrder}
      >
        OrderNow
      </button>
    </div>
  );
};

export default BuildControls;
