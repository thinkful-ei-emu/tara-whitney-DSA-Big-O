function countSheep(num) {
  for(let i = 0; i<num; i++) {
    console.log(`${num-i}: Another sheep jumps over the fence.`);
  }

    return console.log('All sheep jumped over the fence.');
}

function powerCalculator(base, power) {
  if (power < 0) {
    return 'Exponent should be >= 0.';
  }

  if (power === 0) {
    return 1;
  }

  let product = 1;
  let i = 1;
  while(i <= power) {
    product *= base;
    i++
  }
  return product;
}

function reverseString(str) {

  let result = '';
  
  for(let i=0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}


function nthTriangle(n) {

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + (n-i);
  }
  return sum;
}


function stringSplitter(str, splitter) {
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if (str[i] !== splitter) {
      result += str[i];
    }
  }
  return result;
}

function fibonacci(n) {

  let prev = 1;
  let prevprev = 0;
  console.log(1);

  for(let i = 1; i < n; i++) {

    console.log(prev + prevprev);
    let newNum = prev + prevprev;
    prevprev = prev;
    prev = newNum;
  }
}


function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

// const mazeAll = function(labyrinth, position=0, row, col, direction='S',path){
//   if(col<0 || row < 0){
//       return;
//   }
//   if(col>=labyrinth[0].length || row>=labyrinth.length){
//       return;
//   }
 
//   path[position] = direction;
//   position++;

//   if (labyrinth[row][col] === 'e'){
//       PrintPath(path, 1, position - 1);
//       return;
//   }
//   if (labyrinth[row][col] === ' ') {
//       // The current cell is free. Mark it as visited
//       labyrinth[row][col] = 's';
//       // Invoke recursion to explore all possible directions
//       mazeAll(labyrinth,position,row, col - 1, 'L',path); // left
//       mazeAll(labyrinth,position,row - 1, col, 'U',path); // up
//       mazeAll(labyrinth,position,row, col + 1, 'R',path); // right
//       mazeAll(labyrinth,position,row + 1, col, 'D',path); // down
//       // Mark back the current cell as free
//       labyrinth[row][col] = ' ';
//   }
//   // Remove the last direction from the path
//   position--;

// }

// console.log(
//   mazeSolver([
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ])
// );

function anagram(word) {
  let results = [];
  function combinator(ang, rest) {
    if (!rest) {
      results.push(ang);
    }

    for (let i = 0; i < rest.length; i++) {
      console.log(i, ang, rest);
      newAng = ang + rest[i];
      combinator(newAng, rest.slice(0, i) + rest.slice(i + 1));
    }
  }
  combinator('', word);
  return results;
}

function binaryConverter(num) {
  if (num === 1) {
    return 1;
  }

  let digit = String(num % 2);

  let binary = String(binaryConverter(Math.trunc(num / 2))) + digit;

  return Number(binary);
}
