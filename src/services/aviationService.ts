import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getFlights = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/flights`, {
      params: {
        access_key: API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    return [];
  }
};
