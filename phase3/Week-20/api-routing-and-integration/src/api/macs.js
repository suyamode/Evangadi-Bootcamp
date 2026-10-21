import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchMacs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/macs`);
    const data = response.data;
    return Array.isArray(data) ? data : data.products || [];
  } catch (error) {
    console.error("Error fetching Macs:", error);
    throw error;
  }
};
export const fetchMacById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/macs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Mac with id/url ${id}:`, error);
    throw error;
  }
};
