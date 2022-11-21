import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Reducres
import app from "./reducers/app";

// middleware
const middleware = [thunk];

const combinedReducer = combineReducers({
  app,

});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.app) nextState.app = state.app;

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
// creating store
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: false });
