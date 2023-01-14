import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginContainer } from './children/auth/login/pages/Login.container';
import { CabinetLayout } from './children/cabinet/layouts/Cabinet.layout';
import { HomeContainer } from './children/cabinet/home/pages/Home.container';
import { HistoryContainer } from './children/cabinet/history/pages/History.container';
import { ParkingDetailedContainer } from './children/cabinet/history/children/pages/ParkingDetailed.container';
import { ProfileContainer } from './children/cabinet/profile/pages/Profile.container';
import { RegisterContainer } from './children/auth/register/Register.container';
import { ParkingMapContainer } from './children/cabinet/parkings-map/ParkingMap.container';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<LoginContainer />} />
          <Route path="register" element={<RegisterContainer />}></Route>
        </Route>
        <Route path="/cabinet" element={<CabinetLayout />}>
          <Route path="home" element={<HomeContainer />}></Route>
          <Route path="history" element={<HistoryContainer />}></Route>
          <Route
            path="history/:id"
            element={<ParkingDetailedContainer />}
          ></Route>
          <Route path="profile" element={<ProfileContainer />}></Route>
          <Route path="map" element={<ParkingMapContainer />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
