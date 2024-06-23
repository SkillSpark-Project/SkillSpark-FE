import axios from "../../utils/axiosCustomize";
export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post("/Auth/Login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
