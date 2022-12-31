import React from 'react';
import { LoginPage } from './Login.page';
import { useNavigate } from 'react-router-dom';
import { useStorage } from '@ermolaev/mind-ui';
import { useLogin } from './hooks/login.hook';
import { AuthStorageConst } from '../../../../hooks/auth.hook';
import { useToast } from '../../../../hooks/toast.hook';

export const LoginContainer = () => {
  const storage = useStorage();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmitHandler = async (phone: string, password: string) => {
    try {
      const response = await useLogin('+' + phone, password);
      storage.write(AuthStorageConst.accessToken, response.access);
      storage.write(AuthStorageConst.refreshToken, response.refresh);
      navigate('/cabinet/home');
    } catch (e: any) {
      toast.showError(e?.message ?? 'Ошибка');
    }
  };

  return (
    <LoginPage
      onSubmit={onSubmitHandler}
      navigateToRegistration={() => navigate('/auth/registration')}
    />
  );
};
