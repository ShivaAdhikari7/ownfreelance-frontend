import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import FreelancerDetail from './FreelancerDetail';
import JobDetail from './JobDetail';

import AuthContext from 'context/AuthContext/auth-context';

const Detail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  const { userType, token } = useContext(AuthContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let res;

      if (userType === 'Client') {
        res = await axios.get(`http://localhost:90/freelancer/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        res = await axios.get(`http://localhost:90/client/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      setData(
        userType === 'Client' ? res.data.freelancerData : res.data.clientData
      );
    };

    getData();
  }, [id, userType, token]);

  return data ? (
    userType === 'Client' ? (
      <FreelancerDetail freelancerDetail={data} />
    ) : (
      <JobDetail jobDetail={data} />
    )
  ) : null;
};

export default Detail;
