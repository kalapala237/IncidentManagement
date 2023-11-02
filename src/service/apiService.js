import axiosInstance from "./axios";

export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
    return response.fetchData;
  } catch (error) {
    throw error;
  }
};

export const addData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.Post(`${endpoint}`, data);
    return response.fetchData;
  } catch (error) {
    throw error;
  }
};

export const editData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(`${endpoint}`, data);
    return response.fetchData;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.delete(`${endpoint}`, data);
    return response.fetchData;
  } catch (error) {
    throw error;
  }
};
