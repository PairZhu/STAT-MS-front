// import { createStore } from 'redux'
// import rootReducer from './reducers'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));


const store = createStore(
  rootReducer,
  devTools,
)
export default store
