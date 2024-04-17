import axios from './interceptors'

export const PairService = {
  async getAllPair() {
    return Promise.all([
      axios.get('/v1/first'),
      axios.get('/v1/second'),
      axios.get('/v1/third')
    ]).then((responses) => {
      let pairs: any = [
        { pairName: 'RUB/CUPCAKE', values: [] },
        { pairName: 'USD/CUPCAKE', values: [] },
        { pairName: 'EUR/CUPCAKE', values: [] },
        { pairName: 'RUB/USD', values: [] },
        { pairName: 'RUB/EUR', values: [] },
        { pairName: 'EUR/RUB', values: [] }
      ];

      responses.forEach((response, sourceIndex) => {
        const { RUB, USD, EUR } = response.data.rates;
        const sourceKey = ['first', 'second', 'third'][sourceIndex];

        pairs[0].values.push({ [sourceKey]: RUB });
        pairs[1].values.push({ [sourceKey]: USD });
        pairs[2].values.push({ [sourceKey]: EUR });
        pairs[3].values.push({ [sourceKey]: RUB / USD });
        pairs[4].values.push({ [sourceKey]: RUB / EUR }); 
        pairs[5].values.push({ [sourceKey]: EUR / RUB });
      });

      return pairs;
    }).catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
  },

  async pollingAllPair() {
    return Promise.all([
      axios.get('/v1/first/poll'),
      axios.get('/v1/second/poll'),
      axios.get('/v1/third/poll')
    ]).then((responses) => {
      let pairs: any = [
        { pairName: 'RUB/CUPCAKE', values: [] },
        { pairName: 'USD/CUPCAKE', values: [] },
        { pairName: 'EUR/CUPCAKE', values: [] },
        { pairName: 'RUB/USD', values: [] },
        { pairName: 'RUB/EUR', values: [] },
        { pairName: 'EUR/RUB', values: [] }
      ];

      responses.forEach((response, sourceIndex) => {
        const { RUB, USD, EUR } = response.data.rates;
        const sourceKey = ['first', 'second', 'third'][sourceIndex];

        pairs[0].values.push({ [sourceKey]: RUB });
        pairs[1].values.push({ [sourceKey]: USD });
        pairs[2].values.push({ [sourceKey]: EUR });
        pairs[3].values.push({ [sourceKey]: RUB / USD });
        pairs[4].values.push({ [sourceKey]: RUB / EUR }); 
        pairs[5].values.push({ [sourceKey]: EUR / RUB });
      });

      return pairs;
    }).catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
  }
}