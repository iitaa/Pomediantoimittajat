function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navigaatiovalikko") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }