//arrow functions 
const sayHello = () => {    
    console.log('Hello World');
}
sayHello();


//arrow functions with parameters
const sayHello2 = (name) => {
    console.log(`Hello ${name}`);
}
sayHello2('Brad');

//arrow functon implicit return
//these implicit returns only work if you have one line of code in the function
//if you have more than one line of code, you need to use the curly braces
const sayHello3 = (name) => console.log(`Hello ${name}`);
sayHello3('Tony');

//arrow function returning object literal
const sayHello4 = (firstName, lastName) => ({firstName: firstName, lastName: lastName});
console.log(sayHello4('Brad', 'Traversy'));

//using arrow function on map methods
const users = [{name: 'Brad', age: 30}, {name: 'John', age: 40}, {name: 'Mike', age: 35}];
const newUsers = users.map(user => (
    `${user.name} - ${user.age}`
 ));
 console.log(newUsers);

//setTimeout with arrow function
console.log('Hello.....');
const say = () => {
    setTimeout(() => {
        console.log('   are you still there??');
    }, 3000);
}
say();

/*

//setInterval with arrow function
//this will run every 4 seconds
// const say2 = () => {
//     setInterval(() => {
//         console.log(' Hello Internval');
//     }, 4000);
// }
// say2();
 
*/

//reduce with arrow function
//this will add all the ages together
//the 0 is the initial value, if you don't have it, it will start with the first value in the array
//gives you the total of all the ages , a single value
const ages = [23, 45, 67, 89, 21, 34, 56, 78, 90];
const agesSum = ages.reduce((total, age) => total + age, 0);
console.log(agesSum);