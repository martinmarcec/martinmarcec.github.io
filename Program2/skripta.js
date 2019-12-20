var new1 = document.getElementById("myNew");
var newBTN = document.getElementById("newBTN");
var span = document.getElementsByClassName("close")[0];

var edit = document.getElementById("myEdit");
var editBTN = document.getElementById("editBTN");
var span2 = document.getElementsByClassName("close")[1];

var delete1 = document.getElementById("myDelete");
var deleteBTN = document.getElementById("deleteBTN");
var span3 = document.getElementsByClassName("close")[2];

newBTN.onclick = function() {
    new1.style.display = "block";
}
editBTN.onclick = function() {
    edit.style.display = "block";
}
deleteBTN.onclick = function() {
    delete1.style.display = "block";
}

span.onclick = function() {
    new1.style.display = "none";
  }
span2.onclick = function() {
    edit.style.display = "none";
}
span3.onclick = function() {
    delete1.style.display = "none";
}

