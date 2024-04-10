import { combineReducers } from "redux";
import { Authentication } from "./AuthReducer";
import { OwnerReducer } from "./ownerReducer";

export const RootReducer = combineReducers({
  Auth: Authentication,
  Owner: OwnerReducer,
});
