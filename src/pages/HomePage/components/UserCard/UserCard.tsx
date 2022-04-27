import React from 'react';
import { Link } from 'react-router-dom';

import { UserType } from '../../../../globalTypes';
import UserCardDetail from './components/UserCardDetail';

import styles from './UserCard.module.scss';

type PropsType = {
  userInfo: UserType;
};

const UserCard = React.memo(function UserCard({ userInfo }: PropsType) {
  const userCardData = {
    ФИО: userInfo?.name,
    город: userInfo?.address?.city,
    компания: userInfo?.company?.name,
  };

  const { id } = userInfo;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.detailsWrapper}>
        {Object.entries(userCardData).map(([label, text]) => (
          <UserCardDetail key={label} label={label} text={text} />
        ))}
      </div>
      <Link className={styles.link} to={`users/${id}`}>
        Подробнее
      </Link>
    </div>
  );
});

export default UserCard;
