import axios from "axios";
import { sectionFetchData } from "../types";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const getSection = async (data: sectionFetchData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  };
  
  try {
    const result = await axios.get(backendUrl + `/Section/ByTenant/${data.tenantId}`, config);
    return result.data;
  } catch (e) {
    return e;
  }
};

export { getSection };
