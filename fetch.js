const myHeaders = new Headers();
myHeaders.append('apikey', '0c61820d59c22e2607a9cf4cd41187e3');

const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
};

fetch(
	'http://api.exchangeratesapi.io/v1/latest?access_key=0c61820d59c22e2607a9cf4cd41187e3&symbols=USD,AUD,CAD,PLN,MXN&format=1',
	requestOptions
)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log('error', error));
