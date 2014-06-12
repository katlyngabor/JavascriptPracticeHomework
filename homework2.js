/*This takes the two numbers and lists them and then adds them together*/

function heyArray(a,b){  
    console.log([a, b, a+b]);
}  
heyArray(2,3);

/*This function takes the parameters and pus them in a statement*/

function ahhh(name, difficulty){
		console.log( name + " thinks this is " + difficulty + ".");
}
ahhh("Katlyn", "hard");


/*This puts the numbers in a statement and adds thme.*/

function adding(a,b){
		console.log('You have added '+ a + ' and ' + b + '.' + 'The answer is ' + (a+b));
}
adding(2,3);

/*This function paces the array in a statement and logs this to the console*/

function badTv(a,b,c){
		var kardashians= [a,b,c];
		console.log( "No! I don't watch the Kardashians. I'm especially not watching them right now. I don't even know that their names are " + kardashians + ".");
}
badTv("Kim","Khloe","Kourtney");

/*This object describes my cat. I logged to the console my cat's likes and the length of her name*/

var myCat= {
	name:"Ingrid", 
	likes:["ruining furniture", "making children cry", "picking at the sheets to make you insane as you try to sleep"],
	disposition:"cranky"
}
console.log(myCat.likes);
console.log (myCat.name.length);

/*This object logs a statement including the variable "brain" with properties. */
var brain= {
	currentStatus: "melted",
	needs:["sleep", "oreos"]
}
console.log("My brain is " + brain.currentStatus + " and I need " + brain.needs[1] + ".");

/* I wanted to make a function similar to the above object. I made an if/else statement.*/

function brain2 (status,want) {
	if (status.length >4) {
		console.log ("Girl! You need some " + want + "!")
	}else{
		console.log ("Girl. You're fine.");
	}
}
brain2("tired","hugs");

/* I wanted to use "prompt" and "confirm" to interact with the user while incorporating an esleif statement*/
var sleep = prompt("Did you sleep well last night?");

if (sleep === "yes"){
	 confirm("Good. Get to work.");

}else if (sleep ==="no"){
	confirm("That's no good. Probably your evil cat's fault. No whining, though!");

}else {
	confirm("That was a yes or no question, dummy.");
}


/*Practicing with if and else with mathematical computations.*/

function math (a,b) {
	if (a + b <= 5) {
		console.log (a + b);
} else {
		console.log("It's too early for that much math.");
	}
}

math (4,5);

/*Practicing more with prompts and if/else. I wanted to see if i could successfully put an if/esle
in and if/else*/


var sleep = prompt("I wanna try something again. Did you sleep well last night?");

if (sleep === "yes"){
	 var answer = prompt ("Good. You ready for the day?");
	 	if (answer==="no") {
	 		confirm ("Suck it up!");
	 	}else if (answer==="yes") {
	 		confirm ("That's right! Get it!");
	 	}else {
	 		confirm ("That was a yes or no question, dummy!");
	 	}

}else if (sleep ==="no"){
	var answer2 = prompt("That's no good. Did your evil cat keep you up?");

		if (answer2==="yes"){
			confirm ("That's what you get for getting a walmart kitty.")
	}else {
			confirm ("Oh. Then stop whining.")
	}

}else {
	confirm("That was a yes or no question, dummy.");
}


