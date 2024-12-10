import { LOGIN_INFO, LOGOUT_INFO } from "../types/UserInfoTypes";

interface Login {
  email: string;
  password: string;
}
// export const userLogin = async (dispatch: Login) => {
//   try {
//     return await {
//       type: LOGIN_INFO,
//       payload: dispatch,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

export const userLogin = async (dispatch: Login) => {
  try {
    const { email, password } = dispatch;
    return await {
      type: LOGIN_INFO,
      payload: {
        email,
        password,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = async () => {
  try {
    return await {
      type: LOGOUT_INFO,
    };
  } catch (error) {
    console.log(error);
  }
};