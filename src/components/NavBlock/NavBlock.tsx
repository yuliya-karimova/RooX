import React from 'react';
import { TextButton } from '../../base_components';
import { SortTypes } from '../../globalTypes';

import styles from './NavBlock.module.scss';

type PropsType = {
  setSortType: React.Dispatch<React.SetStateAction<SortTypes>>;
};

const NavBlock = React.memo(function NavBlock({ setSortType }: PropsType) {
  const sort = ({ target }: React.MouseEvent<HTMLElement>) => {
    const sortType = (target as HTMLButtonElement).name;
    if (sortType in SortTypes) setSortType(sortType as SortTypes);
  };

  return (
    <div className={styles.wrapper}>
      <p>Сортировка</p>
      <TextButton color="blue" onClick={sort} text="по городу" name={SortTypes.city} />
      <TextButton color="blue" onClick={sort} text="по компании" name={SortTypes.company} />
    </div>
  );
});

export default NavBlock;
