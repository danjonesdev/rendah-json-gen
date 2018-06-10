/* eslint-disable no-console */

import axios from 'axios';

const FetchAsync = async endpoint => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return false;
};

export default FetchAsync;
