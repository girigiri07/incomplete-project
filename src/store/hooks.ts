import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";

import { userReducer } from "../store/reducers/UserReducer";
// import { adminReducer } from "../store/reducers/AdminReducer";

const reducers = combineReducers({
    userReducer: userReducer,
    // adminReducer: adminReducer,
  });
  
  const middlewareList: any = [thunk, logger];
  
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewareList))
  );
  
  export default store;
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;