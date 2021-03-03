import BuildControls from "./BuildControl/BuildControl";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  const buildControls = Object.keys(props.modifyYourBurger).map((igvalue) => {
    return (
      <BuildControls
        key={igvalue}
        label={igvalue}
        modifyYourBurger={props.modifyYourBurger}
      />
    );
  });
  return <div className={classes.BuildControls}>{buildControls}</div>;
};

export default BuildControl;
