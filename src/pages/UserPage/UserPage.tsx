import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUser } from './helpers/getUser';
import Loader from '../../components/Loader/Loader';
import { UserType } from '../../globalTypes';
import UserForm from './components/UserForm/UserForm';

import styles from './UserPage.module.scss';

const UserPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    getUser(setUserInfo, setIsLoading, Number(id));
  }, []);

  return (
    <div className="pageContainer" data-testid="user-page">
      <h1 className={styles.title}>Профиль пользователя</h1>
      {isLoading ? <Loader /> : <UserForm userInfo={userInfo} />}
    </div>
  );
};

export default UserPage;
