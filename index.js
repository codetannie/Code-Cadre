//Event Delegation
// let parent = document
//   .querySelector(".set")
//   .addEventListener("click", handleClick);

// =================================================================

function handleClick(event) {
  //  this === event.target
  console.log(this);
  console.log(event.target);
  makeSound(event.target.innerText);
  buttonAnimation(event.target.innerText);
}

// Added event to Each buttom using for loop
let eventArray = document.querySelectorAll("button");
for (const event of eventArray) {
  event.addEventListener("click", handleClick);
}

// Adding Event Listeners to Keyboard Pressed
document.addEventListener("keypress", handleKeyboardEvent);

function handleKeyboardEvent(event) {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {
  switch (key) {
    case "a": {
      let tom1 = new Audio("sounds/C.mp3");
      tom1.play();
      break;
    }
    case "s": {
      let tom2 = new Audio("sounds/D.mp3");
      tom2.play();
      break;
    }
    case "d": {
      let snare = new Audio("sounds/E.mp3");
      snare.play();
      break;
    }
    case "f": {
      let tom4 = new Audio("sounds/F.mp3");
      tom4.play();
      break;
    }
    case "g": {
      let crash = new Audio("sounds/G.mp3");
      crash.play();
      break;
    }
    case "h": {
      let tom3 = new Audio("sounds/A.mp3");
      tom3.play();
      break;
    }
    case "j": {
      let kick = new Audio("sounds/B.mp3");
      kick.play();
      break;
    }
    case "k": {
      let kick = new Audio("sounds/Cf.mp3");
      kick.play();
      break;
    }
  
    default: {
      break;
    }
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  document.body.classList.add("modify-body");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
    document.body.classList.remove("modify-body");
  }, 200);
}
