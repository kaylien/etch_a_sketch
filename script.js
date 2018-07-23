var gridSize = 17;
document.body.onload = createGrid(gridSize);

function changeColor() {
    this.style.backgroundColor = "black";
    return false;
}

function revertColor() {
	this.style.backgroundColor = 'tomato';
	return false;
}


function createGrid(size) { 
	for (var j = 0; j < size; j++) {
		var containerID = "container-" + j;
		var lineContainer = document.createElement("div");
		lineContainer.setAttribute("id", containerID);
		lineContainer.classList.add("flex-container");
		var gridContainer = document.getElementById("grid-container");
		gridContainer.appendChild(lineContainer);

		for (var i = 0; i < size; i++) {
	  		var newSquare = document.createElement("div");
	  		var divID = "container" + j + "-square" + i;
	  		newSquare.setAttribute('id', divID);
  			newSquare.classList.add('flex-item');
  			newSquare.addEventListener('mouseover', changeColor);
  			//newSquare.addEventListener('mouseout', revertColor);
	
  			var append = document.getElementById(containerID);
  			append.appendChild(newSquare);
  		}
  	}

}

function clearGrid(gridSize) {

	for(var j = 0; j < gridSize; j++) {
		var containerID = "container-" + j;
		var element = document.getElementById(containerID);
		element.parentNode.removeChild(element);
	}
}

function resetGrid() {

	clearGrid(gridSize);
	gridSize = prompt("What size would you like to the grid to be?");
	console.log(gridSize);
	createGrid(gridSize);
}