import axios from "axios";
import { menuFetchData } from "../types";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const getMenu = async (data: menuFetchData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  };
  
  try {
    const result = await axios.get(backendUrl + `/Menu/${data.tenantId}`, config);
    return result.data;
  } catch (e) {
    return e;
  }
};

export { getMenu };
