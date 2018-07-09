document.body.onload = createGrid();

function createGrid() { 

	for(var j = 0; j < 16; j++) {
	var containerID = "container-" + j;
	var lineContainer = document.createElement("div");
	lineContainer.setAttribute("id", containerID);
	lineContainer.classList.add("flex-container");
	var gridContainer = document.getElementById("grid-container");
	gridContainer.appendChild(lineContainer);

		for (var i = 0; i < 16; i++) {
	  		var newDiv = document.createElement("div");
  			newDiv.classList.add('flex-item');
	
  			var append = document.getElementById(containerID);
  			append.appendChild(newDiv);
  		}
  	}
}