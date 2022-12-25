import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import FreelancerDetail from './FreelancerDetail';
import JobDetail from './JobDetail';
import { USER_TYPE, TOKEN } from 'constants/utils';

const Detail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let res;

      if (USER_TYPE === 'Client') {
        res = await axios.get(`http://localhost:90/freelancer/${id}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
      } else {
        res = await axios.get(`http://localhost:90/client/${id}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
      }

      setData(
        USER_TYPE === 'Client' ? res.data.freelancerData : res.data.clientData
      );
    };

    getData();
  }, [id]);

  return data ? (
    USER_TYPE === 'Client' ? (
      <FreelancerDetail freelancerDetail={data} />
    ) : (
      <JobDetail jobDetail={data} />
    )
  ) : null;
};

export default Detail;
