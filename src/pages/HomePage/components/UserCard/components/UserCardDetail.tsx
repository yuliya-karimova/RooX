import React from 'react';

import styles from './UserCardDetail.module.scss';

type PropsType = {
  label: string;
  text: string;
};

const UserCardDetail = React.memo(function UserCardDetail({ label, text }: PropsType) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}:</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
});

export default UserCardDetail;
