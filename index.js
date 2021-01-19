for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var keyname = this.innerHTML;

    switch (keyname) {
      case "드럼1":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        document.querySelector("img").setAttribute("src","jeans/1.jpg")
        break;

      case "드럼2":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        document.querySelector("img").setAttribute("src","jeans/2.jpg")
        break;

      case "드럼3":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        document.querySelector("img").setAttribute("src","jeans/3.jpg")
        break;

      case "드럼4":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        document.querySelector("img").setAttribute("src","jeans/4.jpg")
        break;

      case "크래쉬":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        document.querySelector("img").setAttribute("src","jeans/5.jpg")
        break;

      case "킥":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        document.querySelector("img").setAttribute("src","jeans/6.jpg")
        break;

      case "스네어":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        document.querySelector("img").setAttribute("src","jeans/7.jpg")
        break;

      default: console.log(keyname);

    }

  });
}
