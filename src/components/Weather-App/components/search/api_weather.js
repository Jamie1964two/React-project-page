const REACT_APP_APIKEY="c2bdc3e7d2mshb239e0726713aecp1b7733jsnd711a66f11a4"
export const options =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': REACT_APP_APIKEY,
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

/* fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */