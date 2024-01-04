const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bef872e7a2mshf59297cd5e3ba85p10a907jsn6d627f97d219',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));