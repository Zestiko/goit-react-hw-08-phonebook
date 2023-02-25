import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'))
const RegisterPag = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhoneBookPage = lazy(() => import('../pages/PhoneBook'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPag />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/phonebook" element={<PhoneBookPage />} />
      </Route>
    </Routes>
  );
};


