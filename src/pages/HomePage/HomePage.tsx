import React, { useEffect, useState } from 'react';

import { getUserList } from './helpers/getUserList';
import Loader from '../../components/Loader/Loader';
import { SortTypes, UserType } from '../../globalTypes';
import UserList from './components/UserList/UserList';

import styles from './HomePage.module.scss';

type PropsType = {
  sortType: SortTypes;
};

const HomePage = ({ sortType }: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userList, setUserList] = useState<UserType[]>([]);

  useEffect(() => {
    getUserList(setUserList, setIsLoading, sortType);
  }, [sortType]);

  return (
    <div className="pageContainer" data-testid="home-page">
      <h1 className={styles.title}>Список пользователей</h1>
      {isLoading ? <Loader /> : <UserList userList={userList} />}
    </div>
  );
};

export default HomePage;
