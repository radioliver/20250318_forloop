// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// let person = {name:"Pista", age:40, email:"pista@email.com"};
// for(key in person) {
//     console.log(`${key} = ${person[key]}`);
// } 


// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++
// }


// let i2 = 1;
// do {
//     console.log(i);
//     i2++;
// } while (i <= 5);


// let i3 = 1;
// while (true) {
// if (i3 > 5) {
// break;
// }
// console.log(i);
// i3++;
// }


//1. feladat:
for (let index = 0; index < 20; index++) {
    console.log(`${index} - ${index * index} - ${Math.sqrt(index)}`);
    
}

//2.feladat:
let emoji= "😶‍🌫️"
for (let i = 1; i < 11; i++) {
    console.log(emoji.repeat(i) );
}

//3.feladat:

for (let i = 99; i > 1; i--) {
   if (i % 2 == 0 && i % 3 == 0) {
    console.log(i);
   }
}