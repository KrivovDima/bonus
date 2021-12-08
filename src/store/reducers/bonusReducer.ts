import { NullableType } from '../../types/types';
import { ThunkType } from '../store';

import { bonusAPI } from 'api/bonusAPI';
import { clientsAPI } from 'api/clientsAPI';

const SET_BONUS_DATA = 'bonusReducer/SET-BONUS-DATA';
const SET_ERROR = 'bonusReducer/SET-ERROR';

const initialState: BonusReducerStateType = {
  currentQuantity: null,
  dateBurning: null,
  forBurningQuantity: null,
  error: '',
};

export const bonusReducer = (
  state = initialState,
  action: BonusReducerActionsType,
): BonusReducerStateType => {
  switch (action.type) {
    case SET_BONUS_DATA: {
      return { ...state, ...action.payload };
    }
    case SET_ERROR: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

// actions
const setBonusData = (
  currentQuantity: number,
  dateBurning: string,
  forBurningQuantity: number,
) =>
  ({
    type: SET_BONUS_DATA,
    payload: {
      currentQuantity,
      dateBurning,
      forBurningQuantity,
    },
  } as const);

const setError = (error: string) => ({ type: SET_ERROR, payload: { error } } as const);

// thunk
const getBonusData =
  (accessToken: string): ThunkType =>
  async dispatch => {
    try {
      const res = await bonusAPI.getBonusInfo(accessToken);
      const { currentQuantity, dateBurning, forBurningQuantity } = res.data.data;
      dispatch(setBonusData(currentQuantity, dateBurning, forBurningQuantity));
    } catch (e) {
      dispatch(setError('error, contact support please'));
    }
  };

export const getAccessToken =
  (clientID: string, deviceID: string): ThunkType =>
  async dispatch => {
    try {
      const res = await clientsAPI.receiveAccessToken(clientID, deviceID);
      dispatch(getBonusData(res.data.accessToken));
    } catch (e) {
      dispatch(setError('error, contact support please'));
    }
  };

// types
type BonusReducerStateType = {
  currentQuantity: NullableType<number>;
  dateBurning: NullableType<string>;
  forBurningQuantity: NullableType<number>;
  error: string;
};

export type BonusReducerActionsType =
  | ReturnType<typeof setBonusData>
  | ReturnType<typeof setError>;
