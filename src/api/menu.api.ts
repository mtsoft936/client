import axios from "axios";
import { menuFetchData } from "../types";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const getMenu = async (data: menuFetchData) => {
  try {
    const result = await axios.post(backendUrl + "/Auth/signin", data);
    return result.data;
  } catch (e) {
    return e;
  }
};

export { getMenu };
