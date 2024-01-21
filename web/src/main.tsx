import React from 'react';
import { Navbar } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login, Register } from 'pages/auth';
import Movies from 'pages/movies/main';

const Main = () => (
  <div className="flex h-full w-full flex-col gap-4 ">
    <Navbar />
    <Routes>
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>
      <Route path="movies" element={<Movies />} />
      <Route index path="*" element={<Movies />} />
    </Routes>
  </div>
);

export default Main;
