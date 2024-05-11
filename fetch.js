const myHeaders = new Headers();
myHeaders.append('apikey', '0c61820d59c22e2607a9cf4cd41187e3');

const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
};

  try {
    const result = await fetch(
			'http://api.exchangeratesapi.io/v1/latest?access_key=0c61820d59c22e2607a9cf4cd41187e3&symbols=USD,AUD,CAD,PLN,MXN&format=1',
			requestOptions);
      const resultObj = await result.json();
      console.log(JSON.stringify(resultObj, null, 2));
  } catch (err) {
    console.error(`Could not fetch currency data`);
    throw err;
  }
