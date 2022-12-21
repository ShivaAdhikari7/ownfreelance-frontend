import axios from 'axios';

const getSearchResults = async (searchQuery, currentPage) => {
  let data;

  try {
    if (localStorage.getItem('userType') === 'Client') {
      ({ data } = await axios.get(
        `http://localhost:90/freelancer?keyword=${searchQuery}&limit=5&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('__token__')}`,
          },
        }
      ));
    } else if (localStorage.getItem('userType') === 'Freelancer') {
      ({ data } = await axios.get(
        `http://localhost:90/client?keyword=${searchQuery}&limit=5&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('__token__')}`,
          },
        }
      ));
    }

    let result =
      localStorage.getItem('userType') === 'Client'
        ? data.data.freelancers
        : data.data.clients;

    return [data.data.result, result];
  } catch (err) {
    throw err;
  }
};

export default getSearchResults;
