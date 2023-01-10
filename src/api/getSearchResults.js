import axios from 'axios';

const getSearchResults = async (searchQuery, currentPage, userType, token) => {
  let data;

  try {
    if (userType === 'Client') {
      ({ data } = await axios.get(
        `http://localhost:90/freelancer?keyword=${searchQuery}&limit=5&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ));
    } else if (userType === 'Freelancer') {
      ({ data } = await axios.get(
        `http://localhost:90/client?keyword=${searchQuery}&limit=5&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ));
    }

    let result =
      userType === 'Client' ? data.data.freelancers : data.data.clients;

    return [data.data.result, result];
  } catch (err) {
    throw err;
  }
};

export default getSearchResults;
