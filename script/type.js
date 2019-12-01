// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://pokeapi.co/api/v2/type', true)

request.onload = function() {
	// Begin accessing JSON data here
	var types = JSON.parse(this.responseText);

	/// SHOW THESE TYPES IN THE DROPDOWN IN THE SEARCH MENU
	/// type = types.results[i].name

}

// Send request
request.send();



function findType(){
	var http = new XMLHttpRequest();
	var search = document.getElementById("box").value;
	var url = "https://pokeapi.co/api/v2/type/" + search;
	http.open("GET", url);
	http.onload = function(){
		if(this.status == 200 && this.readyState == 4) {
			var data = JSON.parse(this.responseText);

			/// NAME OF THE TYPE
			// name = data.name;

			/// GENERATION THIS TYPE WAS INTRODUCED INTO
			// generation = data.generation.name

			/// LIST OF VERSION GROUPS WHERE THI REGION CAN BE VISITED
			// groups = data.version_groups[i].name

			/// POKEMON HAVING THIS TYPE
			// pokemon = data.pokemon[i].pokemon.name

			/// MOVES HAVING THIS TYPE
			// moves = data.moves[i].name

			/// CLASS OF DAMAGE INFLICTED BY THIS TYPE
			// damage = data.move_damage_class.name

			/// DETAIL OF HOW EFFECTIVE IT IS TOWARDS OTHER TYPES AND VICE VERSA
			/// PUT IT DIRECTLY IN TABLE OR SOMETHING
			/// OR MAYBE MAKE ANOTHER PAGE FOR THIS (BATTLE TIPS)
			// double_damage_from = data.damage_relations.double_damage_from[i].name
			// double_damage_to = data.damage_relations.double_damage_to[i].name
			// half_damage_from = data.damage_relations.half_damage_from[i].name
			// half_damage_to = data.damage_relations.half_damage_to[i].name
			// no_damage_from = data.damage_relations.double_damage_from[i].name
			// no_damage_to = data.damage_relations.double_damage_to[i].name

			console.log(data.generation.name + ", " + data.move_damage_class.name);

		}
		else{
			///USE A BOOTSTRAP MODAL HERE INSTEAD OF AN ALERT
			alert("Please check the spelling of the region you entered");
			console.log('error');
		}
	}
	http.send();
}