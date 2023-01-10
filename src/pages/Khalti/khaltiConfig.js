import myKey from './khaltiKey';
import axios from 'axios';

let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: '123766',
  productName: 'OwnFreelance Website',
  productUrl: 'http://localhost:3000',
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      let data = {
        token: payload.token,
        amount: +payload.amount,
      };

      let config = {
        headers: {
          Authorization: myKey.secretKey,
        },
      };

      axios
        .post('https://khalti.com/api/v2/payment/verify/', data, config)
        .then(response => {})
        .catch(error => {
          console.error(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {},
  },
  paymentPreference: [
    'KHALTI',
    'EBANKING',
    'MOBILE_BANKING',
    'CONNECT_IPS',
    'SCT',
  ],
};

export default config;
