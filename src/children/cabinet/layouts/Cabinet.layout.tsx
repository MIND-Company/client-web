import React from 'react';
import { Navbar, NavbarElement } from '@ermolaev/mind-ui';
import classes from './Cabinet.layout.styles.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const CabinetLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <NavbarElement
          title={'Главная'}
          onClick={() => {
            navigate('/cabinet/home');
          }}
        />
        <NavbarElement
          title={'История'}
          onClick={() => {
            navigate('/cabinet/history');
          }}
        />
        <NavbarElement
          title={'Паркинги'}
          onClick={() => {
            navigate('/cabinet/map');
          }}
        />
        <NavbarElement
          title={'Профиль'}
          onClick={() => {
            navigate('/cabinet/profile');
          }}
        />
      </Navbar>
      <div className={classes.wrapper}>
        <Outlet />
      </div>
    </>
  );
};
