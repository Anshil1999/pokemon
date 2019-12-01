function findPokemon(){
	var http = new XMLHttpRequest();
	var search = document.getElementById("box").value;
	var url = "https://pokeapi.co/api/v2/pokemon/" + search;
	http.open("GET", url);
	http.onload = function(){
		if(this.status == 200 && this.readyState == 4) {
			var data = JSON.parse(this.responseText);

			/// NAME OF THE POKEMON
			// name = data.name

			/// WEIGHT OF THE POKEMON
			// weight = data.weight

			/// HEIGHT OF THE POKEMON
			// height = data.height

			/// TYPE OF THE POKEMON
			// type = data.types[i].type.name;

			/// ABILITIES OF THE POKEMON
			// ability = data.abilities[i].ability.name

			/// MOVES OF THE POKEMON
			// moves = data.moves[i].move.name;

			///IMAGE OF THE POKEMON
			// image_src = data.sprites.front_default
		}
		else{
			///USE A BOOTSTRAP MODAL HERE INSTEAD OF AN ALERT
			alert("Please check the spelling of the pokemon you entered");
			console.log('error');
		}
	}
	http.send();
}