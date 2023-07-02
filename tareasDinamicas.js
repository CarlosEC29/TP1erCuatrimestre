// Click en la X para ocultar el elemento de la lista
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Crea un nuevo item en la lista cuando clickeo en el boton "agregar"
function newElement() {
  var li = document.createElement("li");
  li.addEventListener("click", function (ev) {
    ev.target.classList.toggle("checked");
  }
)

  var inputValue = document.getElementById("miTarea").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Debes escribir algo para que se agregue en el listado!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("miTarea").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}