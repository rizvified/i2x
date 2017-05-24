import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Login.jsx';


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
