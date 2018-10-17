import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const logger = createLogger({ collapsed: true })
if (window.location.hostname === `localhost`) middlewares.push(logger)

const store = createStore(reducers, applyMiddleware(...middlewares))
sagaMiddleware.run(sagas)

export default store
