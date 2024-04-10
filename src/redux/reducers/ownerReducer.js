import {Get_Notifications} from "../type";
  
  const intialstate = {getnotifi: [], loading: true};
  export const OwnerReducer = (state = intialstate, action) => {
    switch (action.type) {
      case Get_Notifications: {
        return { ...state, getnotifi: action.data, loading: false };
      }
      default: {
        return state;
      }
    }
  };
  