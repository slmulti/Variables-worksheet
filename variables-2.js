/*

 ----- To run the code run  node variables-2.js in the terminal

  Exercise 1
  Insert "console.log(name);" in the program below so that it prints out "inner"
*/

//  let  name = "outer";
//  function print() {
//    let name = "inner"; 
//    console.log(name);
//  }
//  print();
 

/*
  Exercise 2
  Without removing the "console.log" from the program above, make it log "outer" by removing exactly 1 line
*/

// let  name = "outer";
// function print() {
  
//   console.log(name);
// }
// print();

/*
  Exercise 3
  Without changing innerFunction at all, make it print "SCOPE"
*/

// function outerFunction() {
//   let name = 'SCOPE'
//   function innerFunction() {
//     console.log(name);
//   }
//   innerFunction();
// }
// outerFunction();

// // OR YOU CAN

// function outerFunction() {
  
//   function innerFunction() {
//     console.log(name = 'SCOPE');
//   }
//   innerFunction();
// }
// outerFunction();

/*
  Exercise 4
  Move the name variable in a different location so that all 3 console.logs print something
*/

// function scope1() {

//   var name = "Beyonce";

//   console.log(name);
//   function scope2() {
    
//     console.log(name);
//     function scope3() {
            
//       console.log(name);
//     }
//     scope3();
//   }
//   scope2();
// }
// scope1();

/*
  Exercise 5
  
*/

// let namesList = ["John", "Annie"];
function run() {
  let namesList = ["Ann", "Porter"];
  let toFind = "Ann";
  namesList.forEach((name) => {
    if(name === toFind) {
      console.log("Found Ann!");
    }
  });
}
run();



