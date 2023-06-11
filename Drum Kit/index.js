

//this function is used to add an event listener to each button
//init function is called when the page loads to add the event listeners,this is a init function
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', handleClick);
  });
  
  //this event listener is used to listen for the keydown event
    //keydown event is passed to the function as an argument, and the key property is used to get the key that was pressed
    
  document.addEventListener('keydown', function(event) {
    makeSound(event.key);
  });
  
  //this function is used to handle the click event
    //this function is called in the event listener for the click event
    //the this keyword is used to get the innerHTML of the button that was clicked
  function handleClick() {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  }



  //this function is used to play the sound, it is called in the above function
  //it is also called in the event listener for the keydown event
  //the keydown event is added to the document, so it will listen for any keydown event
  //keydown event is passed to the function as an argument, and the key property is used to get the key that was pressed
  function makeSound(key) {
    switch (key) {
      case 'w':
        //Audio is a built in class in javascript, it is used to play audio
        const tom1 = new Audio('sounds/tom-1.mp3');

        //.catch is used to catch any errors that may occur when playing the audio
        tom1.play().catch(error => {
          console.log('Failed to play audio:', error);
        });

        //break is used to exit the switch statement
        break;
  
      case 'a':
        const tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play().catch(error => {
          console.log('Failed to play audio:', error);
        });
        break;
  
      case 's':
        const tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play().catch(error => {
          console.log('Failed to play audio:', error);
        });
        break;
  
      case 'd':
        const tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play().catch(error => {
          console.log('Failed to play audio:', error);
        });
        break;
  
      case 'j':
        const snare = new Audio('sounds/crash.mp3');
        snare.play().catch(error => {
          console.log('Failed to play audio:', error);
        });
        break;
  
      case 'k':
        const crash = new Audio('sounds/kick-bass.mp3');
        crash.play().catch(error => {
          console.log('Failed to play audio:', error);
        });
        break;
  
      case 'l':
        const kick = new Audio('sounds/snare.mp3');
        kick.play().catch(error => {
          console.log('Failed to play audio:', error);
        });
        break;
  
      default:
        console.log('Invalid key:', key);
    }
  }
  