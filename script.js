const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4cfff049cdmsh0673f990b2b95f5p157ea7jsn530c5821cff4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));