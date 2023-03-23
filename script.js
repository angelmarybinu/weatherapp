const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0b253ac35msh55edd6240dbcf01p1521e1jsn2d4be0fbb17f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));