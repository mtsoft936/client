import axios from "axios";
import { loginData, registerData, resetPasswordData } from "../types";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const login = async (data: loginData) => {
  try {
    const result = await axios.post(backendUrl + "/Auth/login", data);
    return result.data;
  } catch (e) {
    return e;
  }
};

const register = async (data: registerData) => {
  try {
    const result = await axios.post(backendUrl + "/Auth/signup", data);
    return result.data;
  } catch (e) {
    return e;
  }
};

// const forgotPassword = async (data: {email: string}) => {
//   try {
//     const result = await axios.post(BACKEND_URL + "/api/auth/forgotPassword", data);
//     return result.data;
//   } catch (e) {
//     return e;
//   }
// };

// const changePassword = async (formData: resetPasswordData, {token}: { token : string | null}) => {
//   try {
//     const result = await axios.post(BACKEND_URL + "/api/auth/changePassword", formData, {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     });
//     return result.data;
//   } catch (error) {
//     return error;
//   }
// };

export { login, register};
