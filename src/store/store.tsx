import { createStore } from "redux";
import { rootReducer, initialState } from "./reducers/reducers";

export const store = createStore(rootReducer, initialState);
