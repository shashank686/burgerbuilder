import Wrapper from "../../hoc/wrapper";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <Wrapper>
      <div> Toolbar , sideDrawer,Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
