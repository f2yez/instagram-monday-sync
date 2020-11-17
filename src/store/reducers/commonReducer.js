import {createReducer, createAction} from 'redux-act';
import initialState from './initialState';

export const getMe = createAction('get-me');
export const getMeSuccess= createAction('get-me-success');
export const getMeFaild = createAction('get-me-faild');

export const getBoards = createAction('get-boards');
export const getBoardsSuccess= createAction('get-boards-success');
export const getBoardsFaild = createAction('get-boards-faild');

export const getItems = createAction('get-items');
export const getItemsSuccess= createAction('get-items-success');
export const getItemsFaild = createAction('get-items-faild');

export const getItem = createAction('get-items');
export const getItemSuccess= createAction('get-item-success');
export const getItemFaild = createAction('get-item-faild');

export const updateItem = createAction('update-items');
export const updateItemSuccess= createAction('update-item-success');
export const updateItemFaild = createAction('update-item-faild');


const commonReducer = createReducer({

  [getMe]: (state) => ({ ...state, loading: 'login'}),
  [getMeSuccess]: (state, payload) => {
    return {
      ...state,
      loading: null,
      isAuthenticated: true,
      user: payload.user
    }
  },
  [getMeFaild]: (state, payload) => {
    return {
      ...state,
      loading: null,
      isAuthenticated: false,
      error: payload
    }
  },
  [getBoards]: (state) => ({ ...state, loading: 'get-boards'}),
  [getBoardsSuccess]: (state, payload) => {
    return {
      ...state,
      loading: null,
      boards: payload
    }
  },
  [getBoardsFaild]: (state, payload) => {
    return {
      ...state,
      loading: null,
      error: payload
    }
  },
  [getItems]: (state) => ({ ...state, loading: 'get-items'}),
  [getItemsSuccess]: (state, payload) => {
    return {
      ...state,
      loading: null,
      items: payload
    }
  },
  [getItemsFaild]: (state, payload) => {
    return {
      ...state,
      loading: null,
      error: payload
    }
  },
  [getItem]: (state) => ({ ...state, loading: 'get-item'}),
  [getItemSuccess]: (state, payload) => {
    return {
      ...state,
      loading: null,
      item: payload
    }
  },
  [getItemFaild]: (state, payload) => {
    return {
      ...state,
      loading: null,
      error: payload
    }
  },
  [updateItem]: (state) => ({ ...state, loading: 'update-item'}),
  [updateItemSuccess]: (state, payload) => {
    return {
      ...state,
      item: {...state.item, name: payload},
      loading: null,
    }
  },
  [updateItemFaild]: (state, payload) => {
    return {
      ...state,
      loading: null,
      error: payload
    }
  },
}, initialState.common);

export default commonReducer;
