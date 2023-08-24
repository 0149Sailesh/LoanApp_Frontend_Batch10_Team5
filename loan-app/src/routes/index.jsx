import React, { useEffect, useState,  } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { publicRoutes, privateRoutes } from './routes';
import { ScrollToTopController } from '../components/ScrollToTopController';
import { GetAdmin } from '../components/request';
import { Error404 } from '../components/Error/404';
import { useHistory } from "react-router-dom";
export function Routes() {
  
  return (
    
    <Router>
      <Switches />
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      {/* <BackButton />
      <Footer /> */}
    </Router>
  );
}
function Switches() {
  const history = useHistory();
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          exact
          component={route.component}
          path={route.url}
          key={route.url}
        />
      ))}
      { privateRoutes.map((route) => (
        <PrivateRoute
          exact
          path={route.url}
          key={route.url}
          role={route.role}
        >
          {route.component}
        </PrivateRoute>
      ))}
      <Route component={Error404} />
    </Switch>
  );
}

function PrivateRoute({
  children, exact, path, role
}) {
  const history= useHistory()
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(async () => {
    console.log('hitting useeffect')
    if (localStorage.getItem('Token')) {
      console.log("Item is found in localstorage")
    try{  const res = await GetAdmin();
      console.log(res)
      if (res.status !== 204) {
        console.log('hitting false')
        setLoggedIn(false);
      }
      else{
        console.log('hitting true')
        let user_role = localStorage.getItem('user_role');

        if(role!=user_role){
          console.log('Current user doesnt hv access to the page');
          localStorage.clear()
          setLoggedIn(false)
        } else {
         setLoggedIn(true)
          console.log("Role matches")
        }
      }}
      catch(e){
        localStorage.clear();
    history.push('/')
      }
    } else {
      console.log("TOken not found")
      setLoggedIn(false);
    }

  }, [loggedIn]);
  return (
    <>  {loggedIn&&  <Route
    
      exact={exact}
      path={path}
     component={children}
    />}
    {!loggedIn && <Redirect to={'/'}/>}
    </>

  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};