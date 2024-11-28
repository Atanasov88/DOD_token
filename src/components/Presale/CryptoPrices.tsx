export interface CryptoPrices {
    sol?: number;
    bnb?: number;
    eth?: number;
    btc?: number;
    doge?: number;
}

const fetchCryptoPrices = async (): Promise<CryptoPrices> => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=solana,binancecoin,ethereum,bitcoin,dogecoin&vs_currencies=usd'
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
  
      const data = await response.json();
      return {
        sol: data.solana.usd,
        bnb: data.binancecoin.usd,
        eth: data.ethereum.usd,
        btc: data.bitcoin.usd,
        doge: data.dogecoin.usd,
      };
    } catch (error) {
      console.error('Error fetching prices:', error);
      return {}; // Return an empty object in case of error
    }
  };

export default fetchCryptoPrices;
