import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, UserPage, NotFoundPage } from './pages';
import { NavBlock } from './components';

import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <NavBlock />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
