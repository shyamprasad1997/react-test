import axios from "axios";

const getConversion = (baseA, baseB, value) => {
  return axios
    .get(
      `http://data.fixer.io/api/convert?access_key=189c25b3957e312a29e08ecb030e5680&from=${baseA}&to=${baseB}&amount=${value}`
    )
    .then(response => {
      return response.result;
    })
    .catch(error => {
      return 0;
    });
};

const getCurrencies = () => {
  return axios
    .get(
      `http://data.fixer.io/api/latest?access_key=189c25b3957e312a29e08ecb030e5680&format=1`
    )
    .then(response => {
      return response.data.rates;
    })
    .catch(error => {
      return [];
    });
};

export const rootServices = {
  getConversion,
  getCurrencies
};
