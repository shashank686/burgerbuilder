import classes from "./Backdrop.module.css";
const BackDrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default BackDrop;
