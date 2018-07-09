document.body.onload = createGrid();

var lastGridSquare = document.getElementById("container15-square15");
console.log(lastGridSquare);
lastGridSquare.addEventListener('mouseover', changeColor);

function changeColor() {
    this.style.backgroundColor = "black";
    return false;
}

function revertColor() {
	this.style.backgroundColor = 'red';
	return false;
}

function createGrid() { 

	for(var j = 0; j < 16; j++) {
	var containerID = "container-" + j;
	var lineContainer = document.createElement("div");
	lineContainer.setAttribute("id", containerID);
	lineContainer.classList.add("flex-container");
	var gridContainer = document.getElementById("grid-container");
	gridContainer.appendChild(lineContainer);

		for (var i = 0; i < 16; i++) {
	  		var newSquare = document.createElement("div");
	  		var divID = "container" + j + "-square" + i;
	  		newSquare.setAttribute('id', divID);
  			newSquare.classList.add('flex-item');
  			newSquare.addEventListener('mouseover', changeColor);
  			newSquare.addEventListener('mouseout', revertColor);
	
  			var append = document.getElementById(containerID);
  			append.appendChild(newSquare);
  		}
  	}
}

