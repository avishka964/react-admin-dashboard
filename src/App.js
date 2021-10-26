import { Toolbar, Box } from '@mui/material';
import React from 'react';
import ApplicationDrawer from './components/Drawer/Drawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import UserList from './screens/UserList';
import User from './screens/User';
import NewUser from './screens/NewUser';
import ProductList from './screens/ProductList';
import Product from './screens/Product'
import NewProduct from './screens/NewProduct';

const drawerWidth = 240;

const App = () => {
  return (
    <div>
      <Router>
        <ApplicationDrawer />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: {
              sm: `calc(62% - ${drawerWidth}px)`,
              md: `calc(47% - ${drawerWidth}px)`,
              lg: `calc(35% - ${drawerWidth}px)`,
              xl: `calc(25% - ${drawerWidth}px)`,
            },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <UserList />
            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>
            <Route path='/new-user'>
              <NewUser />
            </Route>
            <Route path='/products'>
              <ProductList />
            </Route>      
            <Route path='/product/:productId'>
            <Product />
            </Route>           
            <Route path='/new-product'>
              <NewProduct />
            </Route>                
          </Switch>
        </Box>
      </Router>
    </div>
  );
};

export default App;
