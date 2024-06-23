import axios from "../../utils/axiosCustomize";
export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post("/Auth/Login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const registerAcc = async ({
  email,
  username,
  fullname,
  phoneNumber,
  birthday,
  password,
}) => {
  try {
    const response = await axios.post("/Auth/Register", {
      email,
      username,
      fullname,
      phoneNumber,
      birthday,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
