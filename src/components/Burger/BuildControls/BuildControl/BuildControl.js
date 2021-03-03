import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  const decreaseQuantity = () => {
    props.modifyYourBurger[props.label][0](0);
  };

  const increaseQuantity = () => {
    props.modifyYourBurger[props.label][0](1);
  };

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={decreaseQuantity}>
        -
      </button>
      <h3> {props.modifyYourBurger[props.label][1]}</h3>
      <button className={classes.more} onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default BuildControl;
