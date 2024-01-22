import { Navbar } from 'components';
import { Auth, Movies } from 'pages';
import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';

const Routes: React.FC = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="movies">
        <Route index element={<Movies.Main />} />
        <Route path="new" element={<Movies.New />} />
        <Route path=":movieId" element={<Movies.Update />} />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Route>

      <Route path="auth">
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route index path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="*" element={<Navigate to="/movies" />} />
    </Switch>
  </>
);

export default Routes;
