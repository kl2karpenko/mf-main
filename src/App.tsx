import React from 'react';
import { Box, AppBar, Toolbar, makeStyles, Button } from '@material-ui/core';
import Home from '@klkarpenko/mf-home';
import RandomJokes from '@klkarpenko/mf-random-jokes';
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
    link: '/random_jokes',
    label: 'Random Jokes'
  }
]

function App({ location }: { location: any }) {
  const pathname = location?.pathname;
  const cls = useStyles();

  return (
    <>
      <AppBar position="static" data-test="app-bar">
        <Toolbar>
          {menuItems.map((item: IMenuItem) => (
            <Button
              component={Link}
              to={item.link}
              data-test={`link-to-${item.link.replace('/','')}`}
              key={item.link}
              className={cx(cls.menuItem, pathname === item.link && cls.menuItemSelected)}
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Box m={2}>
        <Switch>
          <Route path="/random_jokes">
            <Box data-test="random-jokes-app">
              <RandomJokes />
            </Box>
          </Route>
          <Route path="/home" exact>
            <Box data-test="home-app">
              <Home />
            </Box>
          </Route>
        </Switch>
      </Box>
    </>
  );
}

export default withRouter(App);
