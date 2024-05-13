// Currency data ---------------------------
export const getCurrencyConversionData = async () => {
  const myHeaders = new Headers();
  myHeaders.append('apikey', '0c61820d59c22e2607a9cf4cd41187e3');
  const options = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  const response = await fetch(
    'http://api.exchangeratesapi.io/v1/latest?access_key=0c61820d59c22e2607a9cf4cd41187e3&symbols=USD,AUD,CAD,PLN,MXN&format=1',
    options,
  );
  if (!response.ok) {
    throw new Error('Cannot fetch currency data.');
  }
  return await response.json();
};

export const getSalary = (amountUSD, currency, currencyData) => {
  const amount =		currency === 'USD' ? amountUSD : amountUSD * currencyData.rates[currency];
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });
  return formatter.format(amount);
};
