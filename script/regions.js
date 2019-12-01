// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://pokeapi.co/api/v2/region', true)

request.onload = function() {
	// Begin accessing JSON data here
	var regions = JSON.parse(this.responseText);

	/// SHOW THESE REGIONS IN THE DROPDOWN IN THE SEARCH MENU
	/// region = regions.results[i].name

}

// Send request
request.send();



function findRegion(){
	var http = new XMLHttpRequest();
	var search = document.getElementById("box").value;
	var url = "https://pokeapi.co/api/v2/region/" + search;
	http.open("GET", url);
	http.onload = function(){
		if(this.status == 200 && this.readyState == 4) {
			var data = JSON.parse(this.responseText);

			/// NAME OF THE REGION
			// name = data.name;

			/// LOCATIONS IN THIS REGION
			// location = data.locations[i].name

			/// GENERATION THIS REGION WAS INTRODUCED INTO
			// generation = data.main_generation.name

			/// LIST OF VERSION GROUPS WHERE THI REGION CAN BE VISITED
			// groups = data.version_groups[i].name
		}
		else{
			///USE A BOOTSTRAP MODAL HERE INSTEAD OF AN ALERT
			alert("Please check the spelling of the region you entered");
			console.log('error');
		}
	}
	http.send();
}