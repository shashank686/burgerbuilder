import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  const decreaseQuantity = () => {
    props.modifyYourBurger[props.label][0](0);
    props.price(props.label, 0);
  };

  const increaseQuantity = () => {
    props.modifyYourBurger[props.label][0](1);
    props.price(props.label, 1);
  };

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={decreaseQuantity}
        disabled={props.modifyYourBurger[props.label][1] ? false : true}
      >
        Less
      </button>
      {/* <h3> {props.modifyYourBurger[props.label][1]}</h3> */}
      <button className={classes.more} onClick={increaseQuantity}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
