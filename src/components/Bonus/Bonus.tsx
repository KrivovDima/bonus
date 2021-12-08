import React, { FC, memo, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './Bonus.module.css';
import { BonusPropsType } from './types';

import { getAccessToken } from 'store/reducers/bonusReducer';
import { AppStateType } from 'store/store';
import { formattingDate } from 'utils/formattingDate';

export const Bonus: FC<BonusPropsType> = memo(({ deviceID, clientID }): ReactElement => {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(
    (state: AppStateType) => state.bonus.currentQuantity,
  );
  const dateBurning = useSelector((state: AppStateType) => state.bonus.dateBurning);
  const formatDateBurning = formattingDate(dateBurning);
  const forBurningQuantity = useSelector(
    (state: AppStateType) => state.bonus.forBurningQuantity,
  );
  const error = useSelector((state: AppStateType) => state.bonus.error);

  useEffect(() => {
    dispatch(getAccessToken(clientID, deviceID));
  }, []);

  return (
    <div className={styles.wrapper}>
      {!currentQuantity ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.inner}>
          <div className={styles.numbersOfBonuses}>
            <div className={styles.allBonus}>{currentQuantity} бонусов</div>
            <div className={styles.burnBonuses}>
              <span>{formatDateBurning} сгорит</span>
              <span className={styles.countBurn}>{forBurningQuantity} бонусов</span>
            </div>
            <div>{error}</div>
          </div>
          <input type="button" className={styles.onwardsBtn} />
        </div>
      )}
    </div>
  );
});
