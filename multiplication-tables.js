console.log("Multiplication-Tables");

/*
for (let i = 1; i <= 10; i++) {
    const multiply = i * 9;
    console.log(i + " x 9 = " + multiply);
  }
*/

  // Bonus
  // Use a nested for loop to write the multiplication tables of 1 until 10. Start the loop at the lowest number (1)

  for (let j=1; j <=10; j++) {
      for (let k=1; k <= 10; k++){
          const multiplyK = j * k;
          console.log(j + " x " + k + " = " + multiplyK);
      }
  }