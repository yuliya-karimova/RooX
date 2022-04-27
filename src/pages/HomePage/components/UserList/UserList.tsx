import React from 'react';

import UserCard from '../UserCard/UserCard';
import { UserType } from '../../../../globalTypes';

import styles from './UserList.module.scss';

type PropsType = {
  userList: UserType[];
};

const UserList = React.memo(function UserList({ userList }: PropsType) {
  return (
    <>
      {userList ? (
        <div className={styles.list}>
          {userList.map((user) => (
            <UserCard key={user.id} userInfo={user} />
          ))}
        </div>
      ) : (
        <p>Sorry, no users</p>
      )}
    </>
  );
});

export default UserList;
