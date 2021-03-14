import 'Classes\SelectedAction.js';
// Early Game
//Constants
var teeth = 0;
var shootas = 1;

//methods

//Adds teeth when clicked
function teethClick(number){
    teeth = teeth + number;
	document.getElementById("teeth").innerHTML = teeth;
};

//Buy Functions
//Buys Shootas
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

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
		teeth += 1;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
} 


// Constantly running functions


window.setInterval(function(){
	teethClick(shootas);
}, 1000); //This will run once every 1000ms, or every second