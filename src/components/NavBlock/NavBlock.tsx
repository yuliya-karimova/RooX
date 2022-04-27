import React from 'react';
import { TextButton } from '../../base_components';

import styles from './NavBlock.module.scss';

const NavBlock = React.memo(function NavBlock() {
  const sort = () => {
    console.log('sort');
  };

  return (
    <div className={styles.wrapper}>
      <p>Сортировка</p>
      <TextButton color="blue" onClick={sort} text="по городу" />
      <TextButton color="blue" onClick={sort} text="по компании" />
    </div>
  );
});

export default NavBlock;
