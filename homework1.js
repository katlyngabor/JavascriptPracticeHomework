
/* I am creating and defining 5 variables, which are all strings.*/

var week2="Do I know what I'm doing?";
var truthbomb="Not really";
var nbd= "I will learn, though"
var time= "In three months I'll basically be a genius"
var haters= "Haters can suck it."

/* I am logging the above variables onto the console.*/

console.log(week2, " ", truthbomb, " ", nbd, " ", time, " ", haters);

/*I am using the .split method to split the string where there are spaces and doing that 2 times.*/

var learning= "I'm trying to be less stupid.";
var me= learning.split (" ", 2);
console.log (me);

/* I am using the .length method to count how many letters are in the following string*/

var random = "What's up chicken butt?";
console.log (random.length);

/* I am splitting the string into each word and then demonstrating how the join method brings them back together.*/

var life = "Just figure it out as you go.";

var lifenuggets = life.split (" ");
console.log (lifenuggets.join());

/* I created an array of 10 string items. */
var snacks = ["chips", "fruit", "cheese", "popcorn", "cereal", "crackers", "peanut butter", "veggies", "cereal bars", "trail mix"];

console.log (snacks.push("almonds"));
console.log (snacks.pop())
console.log (snacks.reverse())
console.log (snacks.splice(2,3,"fruit snacks"))
