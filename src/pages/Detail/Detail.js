import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import FreelancerDetail from './FreelancerDetail';

const Detail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:90/freelancer/info/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('__token__')}`,
        },
      });

      setData(res.data.user);
    };

    getData();
  }, [id]);

  return data ? <FreelancerDetail freelancerDetail={data} /> : null;
};

export default Detail;
