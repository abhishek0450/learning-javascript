const task =[{id:1, name:'task1', isCompleted: true}  , {id:2, name:'task2', isCompleted: false} ,  {id:3, name:'task3', isCompleted: true}  , {id:4, name:'task4', isCompleted: false} , {id:5, name:'task5', isCompleted: false}]

//forEach is a method that takes a function as an argument and applies that function to each element in the array

task.forEach(function(todo){
    console.log(todo.name);
});

//other way to do it
for(let i=0; i<task.length; i++){
    console.log(task[i].id);
}


//map is a method that takes a function as an argument and returns a new array with the result of the function applied to each element in the array

const taskName = task.map(function(todo){
    return todo.name;
});
console.log(taskName);


//filter is a method that takes a function as an argument and returns a new array with the elements that return true in the function
//filter is used to filter out elements

const taskCompleted = task.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(taskCompleted);


let heroes = ["ironman","hulk","antman","batman"];

//for loop
for (i=0; i<heroes.length;i++){
  console.log(heroes[i]);
}

//for of loop
for (let hero of heroes){
  console.log(hero.toUpperCase());
}

//avrage of array

let numbers = [10,20,30,40,50];

let sum = 0;
for(let val of numbers){
    sum+=val;
}
avg=sum/numbers.length;


//forEach is a method in array, it takes a function as an argument and applies the function to each element of the array
//forEach is higher order function,which means it takes a function as an argument {higher order function is a function that takes a function as an argument or returns a function as a result}
let cars = ["audi","bmw","benz","toyota"];

cars.forEach((val)=>{
  console.log(val.toUpperCase()); //output: AUDI BMW BENZ TOYOTA
})

//map() is a method in array, it takes a function as an argument and applies the function to each element of the array and returns a new array,usually used to make a new array from an existing array
let numBers = [10,20,30,40,50];
let newNumbers = numBers.map((val)=>{
  return val*2;
})
console.log(newNumbers);//output: [20,40,60,80,100]

//filter() is a method in array, it takes a function as an argument and applies the function to each element of the array and returns a new array,usually used to filter out some elements from an existing array
let numBers1 = [10,20,30,40,50];
let newNumbers1 = numBers1.filter((val)=>{
  return val>30;
})
console.log(newNumbers1); //output: [40,50]

//reduce() is a method in array, it takes a function as an argument and applies the function to each element of the array and returns a new array,usually used to reduce an array to a single value like sum of all elements in an array
let numBers2 = [10,20,30,40,50];
let newNumbers2 = numBers2.reduce((sum,val)=>{
  return sum+val;
})
console.log(newNumbers2); //output: 150
//sum is the accumulator and val is the current value, the function is applied to each element of the array and the result is stored in the accumulator(sum) and the final value of the accumulator is returned.
