import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginContainer } from './children/auth/login/pages/Login.container';
import { RegistrationContainer } from './children/auth/registration/pages/Registration.container';
import { HomePage } from './children/cabinet/home/pages/Home.page';
import { CabinetLayout } from './children/cabinet/layouts/Cabinet.layout';
import { HistoryPage } from './children/cabinet/history/pages/History.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<LoginContainer />} />
          <Route path="registration" element={<RegistrationContainer />} />
        </Route>
        <Route path="/cabinet" element={<CabinetLayout />}>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="history" element={<HistoryPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
