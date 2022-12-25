import axios from 'axios';
import { USER_TYPE, TOKEN } from 'constants/utils';

const getSearchResults = async (searchQuery, currentPage) => {
  let data;

  try {
    if (USER_TYPE === 'Client') {
      ({ data } = await axios.get(
        `http://localhost:90/freelancer?keyword=${searchQuery}&limit=5&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      ));
    } else if (USER_TYPE === 'Freelancer') {
      ({ data } = await axios.get(
        `http://localhost:90/client?keyword=${searchQuery}&limit=5&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      ));
    }

    let result =
      USER_TYPE === 'Client' ? data.data.freelancers : data.data.clients;

    return [data.data.result, result];
  } catch (err) {
    throw err;
  }
};

export default getSearchResults;
