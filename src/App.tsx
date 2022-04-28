import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, UserPage, NotFoundPage } from './pages';
import { NavBlock } from './components';
import { SortTypes } from './globalTypes';

import styles from './styles/App.module.scss';

const App = () => {
  const [sortType, setSortType] = useState<SortTypes>(SortTypes.default);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <NavBlock setSortType={setSortType} />
        <Routes>
          <Route path="/" element={<HomePage sortType={sortType} />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
