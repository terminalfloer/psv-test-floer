for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  
let randomNumber = 0;

while (randomNumber <= 8) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  
  if (randomNumber > 8) {
    break;
  }
}

let myArray = ["apple", "banana", "cherry", "date", "elderberry"];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
