function heyArray(a,b){  
    console.log([a, b, a+b]);
}  
heyArray(2,3);


function ahhh(name, difficulty){
		console.log( name + " thinks this is " + difficulty + ".");
}
ahhh("Katlyn", "hard");


function adding(a,b){
		console.log('You have added '+ a + ' and ' + b + '.' + 'The answer is ' + (a+b));
}
adding(2,3);


function badTv(a,b,c){
		var kardashians= [a,b,c];
		console.log( "No! I don't watch the Kardashians. I'm especially not watching them right now. I don't even know that their names are " + kardashians + ".");
}
badTv("Kim","Khloe","Kourtney");

var myCat= {
	name:"Ingrid", 
	likes:["ruining furniture", "making children cry", "picking at the sheets to make you insane as you try to sleep"],
	disposition:"cranky"
}
console.log(myCat.likes);
console.log (myCat.name.length);

var brain= {
	currentStatus: "melted",
	needs:["sleep", "oreos"]
}

console.log("My brain is " + brain.currentStatus + " and I need " + brain.needs[1] + ".");
