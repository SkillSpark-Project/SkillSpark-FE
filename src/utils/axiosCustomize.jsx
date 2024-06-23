import axios from "axios";
import Cookies from "universal-cookie";
const instance = axios.create({
  // baseURL: import.meta.env.TEST_URL,
  baseURL: "https://skillspark.azurewebsites.net/api/",
});
const cookies = new Cookies();
const currentUrl = window.location.href;
instance.interceptors.request.use(
  function (config) {
    const user = cookies.get("user");

    const token = user?.token;
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Referer"] = `${currentUrl}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;

// headers: {
//   'Content-Type': 'application/json',
//   'Authorization': 'Bearer ' + token,
// },
