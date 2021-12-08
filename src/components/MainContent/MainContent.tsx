import React, { FC, ReactElement } from 'react';

import { Bonus } from '../Bonus';

import styles from './MainContent.module.css';

export const MainContent: FC = (): ReactElement => {
  const clientID = '2c44d8c2-c89a-472e-aab3-9a8a29142315';
  const deviceID = '7db72635-fd0a-46b9-813b-1627e3aa02ea';

  return (
    <main className={styles.wrapper}>
      <Bonus clientID={clientID} deviceID={deviceID} />
    </main>
  );
};
