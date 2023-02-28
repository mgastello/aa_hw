// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//       var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }
  
//   function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//       const x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }
  
//   function mysteryScoping3() { // error
//     const x = 'out of block';
//     if (true) {
//       var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }
  
//   function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }
  
//   function mysteryScoping5() { // error
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
//   }

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb} the ${adjective} ${noun}.`)
}

madLib('make', 'best', 'guac')

function isSubstring(searchString, substring) {

    searchString.includes(substring) ? console.log(true) : console.log(false)

}

isSubstring("time to program", "time")
isSubstring("Jump for joy", "joys")

// function fizzBuzz(array) {
//     const newArr = [];

//     array.forEach(ele => { // .forEach is not a function???????
//         if ((ele % 3 === 0) && (ele % 5 !== 0) ||
//         (ele % 3 !== 0) && (ele % 5 === 0)) {
//         newArr.push(ele);
//         }
//     });

//     return newArr;
// }
  
// console.log(fizzBuzz(1, 2, 3, 5, 10, 15, 20, 30));

function isPrime(n) {
    if (n < 2) { return false; }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
}

console.log(isPrime(9))
console.log(isPrime(15))
console.log(isPrime(17))

function sumOfNPrimes(n) {
    let count = 0
    let sum = 0
    let i = 2
    while (count < n) {
      if (isPrime(i)) {
        count++;
        sum += i;
      }
      i++;
    }
    return sum;
}

console.log(sumOfNPrimes(3))
console.log(sumOfNPrimes(24))
console.log(sumOfNPrimes(32))