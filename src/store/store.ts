import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { bonusReducer, BonusReducerActionsType } from './reducers/bonusReducer';

const rootReducer = combineReducers({
  bonus: bonusReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>;
type AppActionsType = BonusReducerActionsType;
export type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>;
