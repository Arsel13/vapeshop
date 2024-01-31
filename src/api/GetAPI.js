import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Utilities/URL";
const GetAPI = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    const fetchData = () => {
      axios.get(BASE_URL + url, config).then((dat) => {
        setData(dat.data);
      });
    };
    fetchData();
  }, [url]);
  const reFetch = async () => {
    var config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    try {
      axios.get(BASE_URL + url, config).then((dat) => {
        setData(dat.data);
      });
    } catch (err) {}
  };
  return { data, reFetch };
};
export default GetAPI;
