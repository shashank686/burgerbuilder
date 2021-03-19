import Wrapper from "../Wrapper/wrapper";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { useState } from "react";
const Layout = (props) => {
  const [show, setShow] = useState(false);
  const cancelSideDrawer = () => {
    setShow(false);
  };

  const setSideDrawer = () => {
    setShow(true);
  };
  return (
    <Wrapper>
      <Toolbar setShow={setSideDrawer} />
      <SideDrawer setShow={cancelSideDrawer} open={show} />
      <main className={classes.Content}>{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
