import React from "react";
import Logo from '../../Logo/Logo';

import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToogle/DrawerToogle";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
        <Logo height="80%" />
        {/* <Logo height="80%" /> */}
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;