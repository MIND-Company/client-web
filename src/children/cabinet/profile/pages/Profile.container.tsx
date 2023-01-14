import React, { useState } from 'react';
import { useProfile } from '../../../../hooks/profile.hook';
import { useEffect } from 'react';
import { IProfile } from '../../../../models/profile';
import classes from './Profile.container.styles.module.css';

export const ProfileContainer = () => {
  const profileApi = useProfile();
  const [profile, setProfile] = useState<IProfile | null>();

  useEffect(() => {
    profileApi().then((res) => {
      setProfile(res);
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      {profile && <span>Номер телефона: {profile.phoneNumber}</span>}
      {!profile && <span>Ваш профиль пуст</span>}
    </div>
  );
};
