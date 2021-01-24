
// Early Game
//Constants
var teeth = 0;
var shootas = 0;

//methods

function teethClick(number){
    teeth = teeth + number;
	document.getElementById("teeth").innerHTML = teeth;
};


function shootasBuy(){ //Template for exponential increase
	var shootaCost = Math.floor(10 * Math.pow(1.1,shootas)); //works out cost of shoota
	if(teeth >= shootaCost){  //Checks if upgrade can be afforded
		shootas = shootas + 1; //Increases number of shootas
		teeth = teeth - shootaCost; //Deducts cost of shootas from teeth
		document.getElementById('shootas').innerHTML = shootas; //Updates total of Shootas
		document.getElementById('teeth').innerHTML = teeth; //Updates total of teeth
	}
	var nextCost = Math.floor(10 * Math.pow(1.1,shootas)); //Updates cost of next upgrade
	document.getElementById('shootaCost').innerHTML = nextCost;
}

// Constants

window.setInterval(function(){
	teethClick(shootas);
}, 1000); //This will run once every 1000ms, or every second