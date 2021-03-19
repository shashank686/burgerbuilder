import classes from "./Toolbar.module.css";
import Logo from "../../../components/Logo/Logo";
import Navigation from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.setShow} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.helper}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Toolbar;
