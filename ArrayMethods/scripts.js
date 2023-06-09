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