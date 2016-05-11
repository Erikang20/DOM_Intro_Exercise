console.log("Javascript is alive!");


//1.Change the greeting

window.onload = function() {
  var greeting_div = document.getElementById("greeting");
  document.getElementById('greeting').innerHTML = "Hello World!";


  //2.Chage the backgroundColor of the <li> items
  document.getElementById('essentials').style.backgroundColor = "yellow";


  // 3.create and add image and set its src attribute
  var img = document.createElement('img');
  img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greeting_div.appendChild(img);

  //4.get the elements in the <li> and add the class "selected" when clicked and
  ///removed the class of the elements that has it

  var list_items = document.querySelectorAll("li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].addEventListener("click", selectItem);
  }

  document.querySelector("#reset").addEventListener("click",
    resetButtonHandler);

  // remove div when the #ghosting is moused over
  document.querySelector("#ghosting").addEventListener("mouseover", function() {
    this.remove();
  });

  ////Changes the widht of the div with double click
  document.querySelector("#resize").addEventListener("dblclick", aFunction);

  function aFunction() {
    document.getElementById("resize").style.width = "600px";

  }

  function selectItem() {
    var myArray = document.querySelector(".selected");
    if (myArray) {
      myArray.className = "";
    }

    /////change the img when clicked
    this.className = "selected";
    document.querySelectorAll("img")[1].src = "./images/" + this.innerHTML +
      ".jpeg";

  }

  function resetButtonHandler() {
    var myArray = document.querySelector(".selected");
    if (myArray) {
      myArray.className = "";
    }
    document.querySelectorAll("img")[1].setAttribute("src",
      "./images/panic.jpeg");
  }

  var noDigits = function(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("I HATE NUMBERZZZ!");
      var doubleWidth = function() {
        this.style.width = '400px';
      };

    }
  };
};
