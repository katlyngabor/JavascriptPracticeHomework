
/* I am creating and defining 5 variables, which are all strings.*/

var week2="Do I know what I'm doing?";
var kinda="Kinda.";
var nbd= "I will learn more, though."
var hope= "hopefully."
var bye= "Okay, bye."

/* I am logging the above variables onto the console.*/

console.log(week2, " ", kinda, " ", nbd, " ", hope, " ", bye);

/*I am using the .split method to split the string where there are spaces and doing that 2 times.*/

var learning= "I'm trying to be less stupid.";
var me= learning.split (" ", 2);
console.log (me);

/* I am using the .length method to count how many letters are in the following string*/

var noob = "I'm a noob.";
console.log (noob.length);

/* I am splitting the string into each word and then demonstrating how the join method brings them back together.*/

var life = "Just figure it out as you go.";

var lifenuggets = life.split (" ");
console.log (lifenuggets.join());

/* I created an array of 10 string items. */
var snacks = ["chips", "fruit", "cheese", "popcorn", "cereal", "crackers", "peanut butter", "veggies", "cereal bars", "trail mix"];

/*finds length of the array after adding on the items listed after .push*/
var snackspush= snacks.push("almonds", "graham crackers");

/*removes the last item of the array*/
var snackspop= snacks.pop();

/*lists items of the array in reverse*/
var snacksreverse= snacks.reverse();

/*this starts at position 2 and removes three elements, forming a new array with those elements*/
var snackssplice= snacks.splice(2,3);

var myfunction= function(a) {
		

}
     /*need help*/

myfunction();
