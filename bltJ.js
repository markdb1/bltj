// gets date info and gives it to be displayed -abc
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
var y = d.getFullYear();
var s =d.getDate();
document.getElementById("m1").innerHTML = n;
document.getElementById("d1").innerHTML = s;

//taskbar js - Victoria
// adds a close button to each item in task
function closebtn() {
  //changed the document.getElementsByTagName to getElementsByClassName
  var myNodelist = document.getElementsByClassName("taskitem");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
}

closebtn();

// close button to hide current list item
function closeitem() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

closeitem();

// checked symbol when clicked
function checkoff() {
  var list = document.querySelector("#myUL");
  list.addEventListener(
    "click",
    function(ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}

checkoff();

// create a new list item when add is clicked
function newElement() {
  var li = document.createElement("li");
  li.className = "taskitem"; //trying to put the newly created li into a class
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Please write something.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  closeitem();
}

// sticker testing
// target elements with the "draggable" class
