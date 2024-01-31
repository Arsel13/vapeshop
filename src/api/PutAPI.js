import axios from "axios";
import { BASE_URL } from "../Utilities/URL";

const PutAPI = async (url, postData) => {
  let config = {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  };
  try {
    let res = await axios.put(BASE_URL + url, postData, config);
    return res;
  } catch (error) {}
};

export default PutApi;
