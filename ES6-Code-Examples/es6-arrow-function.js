function square(x){
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;
// a single expression can be written in one line without need to use return
console.log(squareArrow(9));

// const getFirstName = (fullName) => {
// return fullName.split(' ') [0];
// };

// console.log(getFirstName('John Smith'));

const getFirstName = (fullName) =>  fullName.split(' ');
  
console.log(getFirstName('John Smith'));
    