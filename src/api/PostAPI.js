import axios from "axios";
import { BASE_URL } from "../Utilities/URL";

const PostAPI = async (url, postData) => {
  let config = {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  };
  try {
    let response = await axios.post(BASE_URL + url, postData, config);
    return response;
  } catch (error) {}
};

export default PostAPI;
