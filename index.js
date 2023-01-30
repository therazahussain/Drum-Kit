var btn = document.querySelectorAll(".drum");

for (var i = 0; i <btn.length;i++){

    btn[i].addEventListener("click", function (){   

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        activeKey(buttonInnerHtml);
    })
}


document.addEventListener("keydown",function(event) {
    var key_Board = event.key;
    makeSound(key_Board);
    activeKey(key_Board);
})


function makeSound(key){
    switch (key) {
            
        case "w":
            var music = new Audio('sounds/tom-1.mp3');
            music.play();
          break;
        
        case "a":
            var music = new Audio('sounds/tom-2.mp3');
            music.play();
            break;
        
        case "s":
            var music = new Audio('sounds/tom-3.mp3');
            music.play();
          break;

        case "d":
            var music = new Audio('sounds/tom-4.mp3');
            music.play();
          break;

        case "j":
            var music = new Audio('sounds/snare.mp3');
            music.play();
          break;

        case "k":
            var music = new Audio('sounds/crash.mp3');
            music.play();
          break;

        case "l":
            var music = new Audio('sounds/kick-bass.mp3')
            music.play();
            break;

        default:
            console.log(key_Board);
      }
}


function activeKey(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
       activeButton.classList.remove("pressed");
   },100);
}
