import { takeEvery } from 'redux-saga/effects';
import { fetchAllUsers } from './userSagas';
import { FETCH_USERS } from "./actionTypes";

export default function* rootSaga() {
    yield takeEvery(FETCH_USERS, fetchAllUsers)
}