/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Chris");
let firstName = "Cici";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*let javascriptIsFun =true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "Cici");
console.log(typeof 23);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// // Math operators
// const now = 2021
// const ageChris = now - 1981;
// const ageCici = now -2002;
// // console.log(ageChris, ageCici);

// // console.log(ageChris * 2, ageChris / 10, 2 ** 3);
// // // 2 ** 3 = 2 to the power of 3

// // const firstName = "Chris";
// // const lastName = "Burden";
// // console.log(firstName + ' ' + lastName);

// // Assignment operators
// // let x = 10 + 5; //15
// // x += 10; //x = x + 10
// // x *= 4; //x = x * 4
// // x++; //x++ = x + 1
// // x--; //x-- = x - 1
// // console.log(x);

// // Comparison operators
// console.log(ageChris > ageCici) // >, <, >=, <=
// console.log(ageCici >= 18);
// const isFullAge = ageCici >= 18;

// console.log(now - 1981 > now - 2002);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10 
// console.log(x, y);

// const averageAge = (ageChris + ageCici) / 2;
// console.log(ageChris, ageCici, averageAge)

// const firstName = "Chris";
// const job = "machinist";
// const birthYear = 1981;
// const year = 2037;

// const Chris = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(Chris);

// const chrisNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(chrisNew);

// console.log(`Back ticks are regular strings too`);

// //multi line string

// console.log(`String with a \n\
// multiple \n\
// lines`);

// console.log(`Can use 
// back ticks 
// to create multi line
// elements easily`);

//end multi line strings

// const age = 15;

// if(age >= 18){
//     console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number('Chris'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' + '10' + 3);
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // '11'
// n = n - 1; // 11 - 1 = 10
// console.log(n);

const day = 'fridayf';
switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;   
    default:
        console.log('Not a valid day!');  
}

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('Prepare theory videos')   
} else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples')
} else if (day === 'friday'){
    console.log('Record videos')
} else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend')
} else if(day != 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday' || 'saturday' || 'sunday'){
    console.log('Not a valid day!')
}