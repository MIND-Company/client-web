import React from 'react';
import { Navbar, NavbarElement } from '@ermolaev/mind-ui';
import classes from './Cabinet.layout.styles.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const CabinetLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <NavbarElement title={'Главная'} onClick={() => {}} />
        <NavbarElement
          title={'История'}
          onClick={() => {
            navigate('/cabinet/history');
          }}
        />
        <NavbarElement title={'Паркинги'} onClick={() => {}} />
        <NavbarElement title={'Профиль'} onClick={() => {}} />
      </Navbar>
      <div className={classes.wrapper}>
        <Outlet />
      </div>
    </>
  );
};
