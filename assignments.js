// const country = "United States of America";
// const continent = "North America";
// let population = 328200000;
// let isIsland = false;
// const language = "English";
// let description = country + " is in " + continent + " and its " + population + " people speak " + language; 

// console.log(country + " is in " + continent);

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(population / 2 + " people.");
// population++
// console.log(population);
// console.log("Does " + continent + " have more people than Finland?")
// console.log(population > 6000000);
// console.log("Does " + continent + " have a smaller population than the average country?")
// console.log(population < 33000000);
// console.log(description);

// if(population > 33000000){
//     console.log('United States of Americas population is above average');
// } else{
//     console.log('United States of Americas population is below average');
// }

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 117

// const age = 18
// if(age === 18)console.log('You just became an adult (strict)');
// if(age == 18)console.log('You just became an adult (loose)');
// '18' == 18 //true   (loose)
// '18' === 18 // false   (strict)

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite)
// console.log(typeof favorite)

// if(favorite === 23){ // "23" == 23 -> true
//     console.log("You smell like a poop")
// } else if(favorite === 7){
//     console.log('7 is also a poop')
// } else if(favorite === 9){
//     console.log("9 means you're dumb")
// } else{
//     console.log("Number is not 23, 7 or 9")
// }

// if(favorite !== 23) console.log("Why didn't you pick a cool number?");

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive!')
// } else{
//     console.log('Someone else should drive...')
// }

const isTired = false // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!')
} else{
    console.log('Someone else should drive...')
}