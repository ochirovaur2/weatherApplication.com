


//GLOBAL APP CONTROLLER

{	
	//setup event listener
	document.getElementById('inputBtn').addEventListener('click', getWeather);


	

	function getValue(){

		const value = document.getElementById('inputText').value;

		if(value){
			return value;
		} else {
			alert("Please enter city");
		}
		
	}

	function makeARequest(cityName){
		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c379d02dc4cc9d3763e60961e68ed11b`)
		 .then(res => {
	        console.log(res);
	       	return res.json();
	    })
		.then(data => {
			console.log(data);
	        const city = data.name;
	        const temperture = data.main.temp;
	        const MaxTemp = data.main.temp_max;
	        const MinTemp = data.main.temp_min
	        weather = `Todai in ${city} : ${Math.floor(temperture - 273)}&deg <br>
			Max: ${Math.floor(MaxTemp - 273)}&deg
			Min: ${Math.floor(MinTemp - 273)}&deg
	        `;
	        document.getElementById('weather').innerHTML = weather;

	    })
		.catch(error => {
	        console.log(error);
	    });
	}	
	function getWeather(){
		
		// Get city from DOM
		const city = getValue();

		// Tell user to wait

		document.getElementById('weather').textContent = "Please wait..."

		//Make a request to server and display weather to UI

		makeARequest(city);

		// Clear fields


		document.getElementById('inputText').value = "";

	}
}
