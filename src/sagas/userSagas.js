import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_USERS_FAILED, FETCH_USERS_SUCCEDED } from "./actionTypes";

export function* fetchAllUsers() {
    try {
        const res = yield call(axios.get, 'https://api.github.com/users?since=135')
        yield put({
            type: FETCH_USERS_SUCCEDED,
            users: res.data ? res.data : [],
        })
    } catch (error) {
        yield put({
            type: FETCH_USERS_FAILED,
            message: error.message,
        })
    }
}