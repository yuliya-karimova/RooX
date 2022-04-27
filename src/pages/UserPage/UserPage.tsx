import React, { useEffect, useState } from 'react';

import { getUser } from './helpers/getUser';
import Loader from '../../components/Loader/Loader';
import { UserType } from '../../globalTypes';
import UserForm from './components/UserForm/UserForm';

import styles from './UserPage.module.scss';

const UserPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserType | null>(null);

  useEffect(() => {
    getUser(setUserInfo, setIsLoading);
  }, []);

  return (
    <div className="pageContainer" data-testid="user-page">
      <h1 className={styles.title}>Профиль пользователя</h1>
      {isLoading ? <Loader /> : <UserForm userInfo={userInfo} />}
    </div>
  );
};

export default UserPage;
