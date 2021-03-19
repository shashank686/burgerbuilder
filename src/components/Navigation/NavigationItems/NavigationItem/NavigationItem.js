import classes from "./NavigationItem.module.css";
// see the brackets if you dont want to use return statement you can choose this method note it is stateless component
const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
