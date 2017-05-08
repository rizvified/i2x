import App from '../containers/App.jsx';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      component: Login,
    },

    {
      path: '/home',
      component: Home,
    },

  ],
};

export default routes;
