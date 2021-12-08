import React, { FC, memo, ReactElement, useEffect } from 'react';

import styles from './Bonus.module.css';
import { BonusPropsType } from './types';

export const Bonus: FC<BonusPropsType> = memo((): ReactElement => {
  useEffect(() => {}, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.numbersOfBonuses}>
        <div className={styles.allBonus}>300 бонусов</div>
        <div className={styles.burnBonuses}>
          <span>29.03 сгорит</span>
          <span className={styles.countBurn}>250 бонусов</span>
        </div>
      </div>
      <input type="button" className={styles.onwardsBtn} />
    </div>
  );
});
