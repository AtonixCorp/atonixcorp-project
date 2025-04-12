import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}posts/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await axios.get(`${API_URL}comments/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};