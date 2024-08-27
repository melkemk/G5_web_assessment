import axios from 'axios';
import react from 'react';
const fetchData = async (id: string) => {
  try {
    const response = await axios.get(`https://a2sv-backend.onrender.com/api/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};



export default fetchData;