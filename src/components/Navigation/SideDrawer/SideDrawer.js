import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Wrapper from "../../../hoc/Wrapper/wrapper";
import BackDrop from "../../../components/UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";
const SideDrawer = (props) => {
  return (
    <Wrapper>
      <BackDrop clicked={props.setShow} show={props.open} />
      <div
        className={
          props.open
            ? [classes.SideDrawer, classes.Open].join(" ")
            : [classes.SideDrawer, classes.Close].join(" ")
        }
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Wrapper>
  );
};

export default SideDrawer;
