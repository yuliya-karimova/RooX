import React from 'react';

import UserCard from '../UserCard/UserCard';
import { UserType } from '../../../../globalTypes';

import styles from './UserList.module.scss';

type PropsType = {
  userList: UserType[] | null;
};

const UserList = React.memo(function UserList({ userList }: PropsType) {
  return (
    <>
      {userList ? (
        <div className={styles.wrapper}>
          <div className={styles.list}>
            {userList.map((user) => (
              <UserCard key={user.id} userInfo={user} />
            ))}
          </div>
          <p className={styles.totalCount}>Найдено {userList.length} пользователей</p>
        </div>
      ) : (
        <p>Sorry, no users</p>
      )}
    </>
  );
});

export default UserList;
