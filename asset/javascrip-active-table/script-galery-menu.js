document.getElementById("grid").addEventListener("click", onImage);

function onImage(event) {
  var x = event.target;
  const image = getComputedStyle(x);
  x.src = image.backgroundImage.slice(5, -2);
  if (x.src == "") {
    return;
  } else {
    var modal = document.getElementById("modal01");
    modal.style.display = "block"; //new overlay div
    var img01 = document.getElementById("img01");
    img01.src = x.src;
    document.getElementById("btn1").addEventListener("click", function () {
      modal01.style.display = "none";
    });
    console.log(x.src, img01.clientWidth, img01.clientHeight);
  }
}

/************************** */
/******************************* */
