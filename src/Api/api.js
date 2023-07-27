

const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${endpoint}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const postData = async (endpoint, data, options = {}) => {
  try {
    const response = await fetch(`${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });
 
    if (!response.ok) {
      
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export { fetchData, postData };
