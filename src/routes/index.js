import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import LayoutContainer from '../layouts';
import Customers from '../modules/customers';
import HomePage from '../modules/home';
import Login from '../modules/auth';
import NotFound from '../modules/notfound';
import Orders from '../modules/orders';
import AuthProvider, { useAuth } from '../modules/auth/AuthProvider';
import React from 'react';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  let location = useLocation();

  console.log('PrivateRoute', auth);

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <Outlet />;
};

const Container = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            {[
              {
                component: <HomePage />,
                path: '/',
              },
              {
                component: <Orders />,
                path: '/orders',
              },
              {
                component: <Customers />,
                path: '/customers',
              },
            ].map((el) => (
              <Route
                element={<LayoutContainer>{el.component}</LayoutContainer>}
                key={el.path}
                path={el.path}
              />
            ))}
          </Route>
          <Route element={<Login />} path='/login' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Container;
