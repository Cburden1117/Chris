let markMass;
let markHeight;
let johnMass;
let johnHeight;
let markBMI;
let johnBMI;
const markHigherBMI = "Is Marks BMI is more than Johns? "


markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

console.log("Marks Mass is " + markMass);
console.log("Marks Height is " + markHeight);
console.log("Johns Mass is " + johnMass);
console.log("Johns height is " + johnHeight);

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
let bmi = markBMI > johnBMI
console.log("Marks BMI is " + markBMI + " and " + "Johns BMI is " + johnBMI);
console.log(markHigherBMI, bmi);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
bmi = markBMI > johnBMI
console.log("Marks Mass is " + markMass);
console.log("Marks Height is " + markHeight);
console.log("Johns Mass is " + johnMass);
console.log("Johns height is " + johnHeight);

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
bmi = markBMI > johnBMI
console.log(markHigherBMI, bmi);






