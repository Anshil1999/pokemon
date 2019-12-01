function findPokemon(){
	console.log("here");
	var http = new XMLHttpRequest();
	var search = document.getElementById("box").value;
	console.log(search);
	var url = "https://pokeapi.co/api/v2/pokemon/" + search;
	http.open("GET", url);
	http.onreadystatechange = function(){
		if(this.status >= 200 && this.status < 400) {
			var data = JSON.parse(this.responseText);
			document.getElementById("info").innerHTML = "Abilities = " + data.abilities[0].ability.name + ", " + data.abilities[1].ability.name;
			document.getElementById("image").src = data.sprites.front_default;
		}
		else{
		  console.log('error')
		}
	}
	http.send();
}