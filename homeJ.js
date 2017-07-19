 // gets date info and gives it to info display -abc
function current() {
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
  document.getElementById("mnth").innerHTML = n;
  document.getElementById("yr").innerHTML = y;
  var currentSeconds = $.now().getSeconds();
  //trying to set up alerts at given time -abc
  if(d == eventTime){
    alert("test");
  }
}

// taskbar css
// close button and appending it to each item
window.onload = function close2() {
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
}
//^^ That doesn't work



// close button to hide current list item
window.onload = function close2() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//^^ That doesn't work


// quote generator code -- kate
var quotes = [
  'Don\'t cry because it\'s over, smile because it happened. -Dr. Seuss',
  'Be yourself; everyone else is already taken. -Oscar Wilde',
  'You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth. -William W. Purkey',
  'A room without books is like a body without a soul. -Marcus Tullius Cicero',
  'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. -Dr. Seuss',
  'You only live once, but if you do it right, once is enough. -Mae West',
  'In three words I can sum up everything I\'ve learned about life: it goes on. -Robert Frost',
  'If you tell the truth, you don\'t have to remember anything. -Mark Twain',
  'A friend is someone who knows all about you and still loves you. -Elbert Hubbard',
  'Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi'
];

function newQuote(){
  var randomNumber = Math.floor(Math.random()* (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

// checked symbol when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
  if (ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false);

// create a new list item when add is clicked
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
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
    }
  }
}
