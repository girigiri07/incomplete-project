import { USER_INFO, LOGIN_INFO, LOGOUT_INFO } from "../types/UserInfoTypes";

interface USERINTERFACE {
  name: string;
  email: string;
  password: string;
  userInfo: any;
}

const INTITAL_STATE: USERINTERFACE = {
  userInfo: {},
  name: "",
  email: "",
  password: "",
};

interface Action {
  payload?: any;
  type: string;
}

export const userReducer: React.FC<any> = (
  state = INTITAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case LOGIN_INFO: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGOUT_INFO: {
      return {
        ...state,
        userInfo: {},
      };
    }
    case USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
