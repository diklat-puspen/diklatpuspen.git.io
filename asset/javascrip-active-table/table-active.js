// Tabs
function openAlphabet(evt, AlphabetName) {
  var i;
  var x = document.getElementsByClassName("Alphabet");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(
      " w3-theme-dark",
      ""
    );
  }
  document.getElementById(AlphabetName).style.display = "block";
  evt.currentTarget.className += " w3-theme-dark";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

/////////////////////////////////////
///////////////////////////////////
/////////////////////////////////////////
