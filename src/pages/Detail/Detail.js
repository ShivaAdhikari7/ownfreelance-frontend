import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import FreelancerDetail from './FreelancerDetail';
import JobDetail from './JobDetail';

const Detail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  console.log(id);

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let res;

      if (localStorage.getItem('userType') === 'Client') {
        res = await axios.get(`http://localhost:90/freelancer/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('__token__')}`,
          },
        });
      } else {
        res = await axios.get(`http://localhost:90/client/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('__token__')}`,
          },
        });
      }

      setData(
        localStorage.getItem('userType') === 'Client'
          ? res.data.freelancerData
          : res.data.clientData
      );
    };

    getData();
  }, [id]);

  return data ? (
    localStorage.getItem('userType') === 'Client' ? (
      <FreelancerDetail freelancerDetail={data} />
    ) : (
      <JobDetail jobDetail={data} />
    )
  ) : null;
};

export default Detail;
