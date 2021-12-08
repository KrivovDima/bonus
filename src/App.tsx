import React, { FC, ReactElement } from 'react';

import styles from './App.module.css';
import { Header, MainContent } from './components';

const App: FC = (): ReactElement => (
  <div className={styles.container}>
    <Header />
    <MainContent />
  </div>
);

export default App;
