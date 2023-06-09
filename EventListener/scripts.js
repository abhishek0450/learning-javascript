const grandparent = document.querySelector('.grandparent');
        const parent = document.querySelector('.parent');
        const child = document.querySelector('.child');


        //this is capturing, this function will run from grandparent to child
        grandparent.addEventListener('click', e => {
            console.log('grandparent');
        }, true); //here true is for capturing, which means it will run from grandparent to child

        parent.addEventListener('click', e => {
            console.log('parent');
        },{once:true}); //here once is for running the event only once...
        //if we click on the parent element, it will run only once, after that it will not run

/*
        //this is bubbling, this function will run from child to grandparent
        child.addEventListener('click', e => {
            console.log('child');
          
        },false);

        
*/


        
        //event bubbling is the default behaviour of the event, it will run from child to grandparent
        //event capturing is the opposite of event bubbling, it will run from grandparent to child
        //if we want to change the default behaviour of the event, we can use event capturing
        //we can use event capturing by passing true as the third parameter of the event listener
        
        //if we want to stop the event bubbling/capturing, we can use e.stopPropagation() method

        //if we want to run the event only once, we can use {once:true} as the third parameter of the event listener

        //if we want to remove the event listener, we can use removeEventListener() method
        //removeEventListener() method takes two parameters, one is the event name and another is the function name
        //we can remove the event listener by using the function name, but we have to declare the function outside of the event listener
       
    
       
       const newDiv=document.createElement('div');//this will create a new div element
         newDiv.style.width='200px';
            newDiv.style.height='200px';
            newDiv.style.backgroundColor='purple';
            document.body.appendChild(newDiv);//this will append the newDiv to the body of the document

            newDiv.addEventListener('click',e=>{
                console.log('newDiv');
            }
            );
            

          