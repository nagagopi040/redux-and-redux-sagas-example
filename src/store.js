import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootSaga from './sagas'
import rootReducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const initialState = {}

const store = createStore(
	rootReducers,
	initialState,
	applyMiddleware(thunk,logger,sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store;