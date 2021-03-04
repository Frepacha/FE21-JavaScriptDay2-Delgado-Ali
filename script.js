/* Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location and job title. Once the user passes the four arguments the program should output the following message on screen: 
You will be a job_title in location and married to partners_name with number_childrens.*/
console.log("\nBasic 1 crystalGaze\n")

function crystalGazer(childNum, partnerName, geoLocation, job) {
    console.log(`\tYou will be a ` + job + ` in ` + geoLocation + ` and married to ` + partnerName + ` with ` + childNum + ` children.`);
}
crystalGazer(3, "Jessica", "Vienna", "Nurse");

/* Write a function called ageCalculator() that takes two arguments birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

You should get the following results:

You are either 29 or 28 */

console.log("\nBasic 2 Age Calculator\n");

function ageCalculator(birthYear, currentYear) {
    var age1 = currentYear - birthYear;
    var age2 = currentYear - birthYear;
    console.log(`\tYou are either ${age1} or ${age2 -1}.`);
}
ageCalculator(1992, 2021);

/* Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. Provide the same results just through passing one argument */

console.log("\nBasic 3 Age Calculator-improved\n");

function ageCalculator(birthYear) {
    const currentYear = 2021;
    var result = currentYear - birthYear
    console.log(`\tYou are either ${result} or ${result -1}.`);
}
ageCalculator(1992);
ageCalculator(1984);

/* Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

E.g. If user passes 90 degrees it should get the result of 1.57079 radians */

console.log("\nBasic 4 Degree-Radian Conversion\n");

function convRad(degrees) {
    const rad = 3.1416 / 180;
    var radresult = degrees * rad;
    console.log(`\tIf you put ${degrees} you will have ${radresult} radians`);
}
convRad(90);

/* Create a function that calculates the area and volume of a box.

Formulas:
area = width x height
volume = width x height x depth

Pass three different numbers as arguments and get calculated results using the return statement.

You should get the following results:
The area of the box is: 14
The volume of the box is: 70 */

console.log("\nBasic 5 Area and Volume of a box\n");

function box(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    console.log(`\tThe area of the box is: ${area}`)
    console.log(`\tThe volume of the box is: ${volume}`);
}
box(2, 7, 5);