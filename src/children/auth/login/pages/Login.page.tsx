import { FC, useState } from 'react';
import React from 'react';
import classes from './Login.page.styles.module.css';
import { Button, InputField, ValidatorResponse } from '@ermolaev/mind-ui';

export type ILoginPageProps = {
  onSubmit: (phone: string, password: string) => void;
  navigateToRegistration: () => void;
};

const phoneNumberValidator = (value: string): ValidatorResponse => {
  if (value.length !== 11) {
    return {
      isValid: false,
      message: 'Телефон должен быть в формате 7ХХХХХХХХХХ',
    };
  }

  return {
    isValid: true,
  };
};

export const LoginPage: FC<ILoginPageProps> = ({
  onSubmit,
  navigateToRegistration,
}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.wrapper}>
      <InputField
        type={'numbers'}
        placeholder={'Номер телефона'}
        validators={[phoneNumberValidator]}
        valueChanges={setLogin}
      />
      <InputField
        type={'password'}
        placeholder={'Пароль'}
        valueChanges={setPassword}
      />
      <div className={classes.btns}>
        <Button
          title={'Регистрация'}
          onClick={navigateToRegistration}
          type={'secondary'}
        />
        <Button title={'Войти'} onClick={() => onSubmit(login, password)} />
      </div>
    </div>
  );
};
