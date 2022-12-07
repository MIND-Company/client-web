import React, { useState } from 'react';
import { LoginPage } from './Login.page';
import { useNavigate } from 'react-router-dom';
import { useHttp, useStorage } from '@ermolaev/mind-ui';
import { useEndpoint } from '../../../../hooks/endpoint.hook';
import { useLogin } from './hooks/login.hook';
import { AuthStorageConst } from '../../../../hooks/auth.hook';

export const LoginContainer = () => {
  const storage = useStorage();
  const navigate = useNavigate();

  const onSubmitHandler = async (phone: string, password: string) => {
    const response = await useLogin('+' + phone, password);
    storage.write(AuthStorageConst.accessToken, response.access);
    storage.write(AuthStorageConst.refreshToken, response.refresh);
    navigate('/cabinet/home');
  };

  return (
    <LoginPage
      onSubmit={onSubmitHandler}
      navigateToRegistration={() => navigate('/auth/registration')}
    />
  );
};
