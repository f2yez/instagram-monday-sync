import { put, takeLatest } from 'redux-saga/effects'
import {
  getMe,
  getMeSuccess,
  getMeFaild,
  getBoards,
  getBoardsSuccess,
  getBoardsFaild,
  getItems,
  getItemsSuccess,
  getItemsFaild,
  getItem,
  getItemSuccess,
  getItemFaild,
  updateItem,
  updateItemSuccess,
  updateItemFaild,
} from '../reducers/commonReducer';
import  { monday } from './../../config/monday.config';

export function* getMeAsync(action) {
  try {
    const res = yield monday.api('query { me { id, name } }');
    yield put(getMeSuccess({ user: res.data.me }));
  } catch (e) {
    yield put(getMeFaild())
  }
}

export function* getBoardsAsync(action) {
  try {
    const res = yield monday.api('query { boards(limit: 100) { permissions, id, name } }'); //(ids: 811514863)
    yield put(getBoardsSuccess(res.data.boards));
  } catch (e) {
    yield put(getBoardsFaild())
  }
}

export function* getItemsAsync(action) {
  const { boardId } = action.payload;
  try {
    const res = yield monday.api(`query { boards (ids: ${parseInt(boardId)}) { items { id, name, board { id }, creator { name }, created_at } } }`);
    yield put(getItemsSuccess(res.data.boards[0].items));
  } catch (e) {
    yield put(getItemsFaild())
  }
}

export function* getItemAsync(action) {
  const { itemId } = action.payload;
  try {
    const res = yield monday.api(`query { items (ids: ${parseInt(itemId)}) { id, name, board { id }, creator { name }, created_at } }`);
    yield put(getItemSuccess(res.data.items[0]));
  } catch (e) {
    yield put(getItemFaild())
  }
}

export function* updateItemAsync(action) {
  const { itemId, value, boardId, column } = action.payload;
  try {
    yield monday.api(`mutation { change_simple_column_value ( board_id: ${boardId}, item_id: ${itemId}, column_id: "${column}", value: "${value}" ) { id, name } }`);
    yield put(updateItemSuccess(value));
  } catch (e) {
    yield put(updateItemFaild())
  }
}

export function* watchCommon() {
  yield takeLatest(getMe, getMeAsync);
  yield takeLatest(getBoards, getBoardsAsync);
  yield takeLatest(getItems, getItemsAsync);
  yield takeLatest(getItem, getItemAsync);
  yield takeLatest(updateItem, updateItemAsync);
}