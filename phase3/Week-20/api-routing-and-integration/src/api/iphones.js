const API_BASE_URL = "http://localhost:3000";

export const fetchIphones = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/iphones`);
    if (!response.ok) {
      throw new Error("Failed to fetch iPhones");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching iPhones from service:", error);
    throw error;
  }
};

export const fetchIphoneById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/iphone/${id}`);
    if (!response.ok) {
      throw new Error("Product not found");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};
