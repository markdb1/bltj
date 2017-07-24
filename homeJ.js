// Calendar - gets date info and gives it to info display -abc
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
  // var currentSeconds = $.now().getSeconds();
  // //trying to set up alerts at given time -abc
  // if (d == eventTime) {
  //   alert("test");
  // }
}

// taskbar js - Victoria
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

// quote generator code -- kate
var quotes = [
  "Don't cry because it's over, smile because it happened. -Dr. Seuss",
  "Be yourself; everyone else is already taken. -Oscar Wilde",
  "A room without books is like a body without a soul. -Marcus Tullius Cicero",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams. -Dr. Seuss",
  "You only live once, but if you do it right, once is enough. -Mae West",
  "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
  "If you tell the truth, you don't have to remember anything. -Mark Twain",
  "A friend is someone who knows all about you and still loves you. -Elbert Hubbard",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi"
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
// Notes stuff


//flag to check if current note is new or existing note
var position = -1;

$(document).ready(function () {

    $("ul").on("click", "li", function () {
        //filter out span in the list
        var noteContent = $(this).contents().filter(function () {return this.nodeType === 3; }).text();
        var currentColor = $(this).css("background-color");
        //get existing note index in ul
        position = $(this).index();
        $(this).goEdit();
        $(".button.delete").show();
        $("textarea").val(noteContent);
        $("textarea").css("background", currentColor);
    });

    //delete the note from list
    $("ul").on("click", "li>span", function (event) {
        event.stopPropagation();
        $(this).parent().remove();
    });


    //enter note create
    $(".button.create").click(() => {
        $(this).goEdit();
    });

    //slide toggle palette
    $(".button.color").click(() =>{
        $(".color-panel").slideToggle("fast");
        $("textarea").focus();
    });

    //pick color to change background color of current note
    $(".cbutton").click(function(){
        var color=$(this).css("background-color");
        $("textarea").css("background" , color);
        $("textarea").focus();
    });

    //delete current note
    $(".button.delete").click( () => {
        $(".notes-list li:eq("+position+")").remove();
        $(this).goBack();
    });

    //finish creating or editing button
    $(".button.done").click( () => {
        //get information from edit view
        var currentNote = $("textarea").val();
        var noteColor = $("textarea").css("background-color");

        //check input from the user. process the note if note is not empty
        if(currentNote.trim()) {
            var newNote = document.createElement("li");
            var content = document.createTextNode(currentNote);
            var noteDelete = document.createElement("span");
            var buttonText = document.createTextNode("       x");
            noteDelete.appendChild(buttonText);
            newNote.appendChild(content);
            newNote.appendChild(noteDelete);
            newNote.style.background = noteColor;
            if(position===-1){
                $(".notes-list").append(newNote);
            }
            else{
                $(".notes-list li:eq("+position+")").replaceWith(newNote);
            }
            $(this).goBack();
        }
        else{
            if(position !== -1){
                //delete existing node from the list if user clear all contents in the note
                $(".notes-list li:eq("+position+")").remove();
            }
            $(this).goBack();
        }
    });

    /*
     *    create jquery plugin
     *    goBack function to show note list and hide edit view
     *    goEdit function to show edit view and hide note list
     */
    (function($){
        $.fn.goBack = () => {
            $(".button.create").show();
            $(".notes-list-container").show();
            $(".button.done").hide();
            $(".button.color").hide();
            $(".button.delete").hide();
            $(".color-panel").hide();
            $(".paper-container").css("display","none");
            $("textarea").val("");
            $("textarea").css("background","white");
            position = -1;
        };

        $.fn.goEdit = () => {
            $(".button.create").hide();
            $(".notes-list-container").hide();
            $(".button.done").show();
            $(".button.color").show();
            $(".paper-container").css("display","flex");
            $("textarea").focus();
        };
    }(jQuery));
});
