import React, { FC, ReactElement } from 'react';

import { Bonus } from '../Bonus';

import styles from './MainContent.module.css';

export const MainContent: FC = (): ReactElement => {
  const clientID = '';
  const deviceID = '';

  return (
    <main className={styles.wrapper}>
      <Bonus clientID={clientID} deviceID={deviceID} />
    </main>
  );
};
