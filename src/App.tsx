import React from 'react';
import { Box, Tabs, Tab, AppBar, Toolbar, makeStyles, Button } from '@material-ui/core';
import Home from '@klkarpenko/mf-home';
import { withRouter } from "react-router";
import cx from "classnames";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles(() => ({
  menuItem: {
    color: 'white',
    '& > span:first-child': {
      borderBottom: '2px solid transparent'
    }
  },
  menuItemSelected: {
    position: 'relative',
    '& > span:first-child': {
      borderBottom: '2px solid white'
    }
  },
}));

interface IMenuItem {
  label: string;
  link: string;
}
const menuItems: IMenuItem[] = [
  {
    link: '/home',
    label: 'Home'
  },
  {
    link: '/users',
    label: 'Users'
  },
  {
    link: '/about',
    label: 'About'
  },
]

function App({ location }: { location: any }) {
  const pathname = location?.pathname;
  const cls = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {menuItems.map((item: IMenuItem) => (
            <Button component={Link} to={item.link} className={cx(cls.menuItem, pathname === item.link && cls.menuItemSelected)}>{item.label}</Button>
          ))}
        </Toolbar>
      </AppBar>
      <Box m={2}>
        <Switch>
          {/*<Home />*/}
          {/*<Route path="/about">*/}
          {/*  <About />*/}
          {/*</Route>*/}
          {/*<Route path="/users">*/}
          {/*  <Users />*/}
          {/*</Route>*/}
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
      </Box>
    </>
  );
}

export default withRouter(App);
