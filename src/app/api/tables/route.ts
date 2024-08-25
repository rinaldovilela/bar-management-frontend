import axios from "axios";

const API_URL = "http://localhost:5000/api/tables";

export const fetchTables = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTable = async (table: { name: string; status: string }) => {
  const response = await axios.post(API_URL, table);
  return response.data;
};
