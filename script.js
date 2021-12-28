const startGridSize = 16;
const maxGridSize = 100;
const squaresContainer = document.querySelector("#squares-div");

function getRandomColor() {
	const r = Math.trunc(Math.random() * 256);
	const g = Math.trunc(Math.random() * 256);
	const b = Math.trunc(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

function activateSquare(e)
{
	e.target.classList.toggle('hovered');
	e.target.style.backgroundColor = getRandomColor();
}

function deactivateSquare(e)
{
	e.target.classList.toggle('hovered');  
	e.target.style.backgroundColor = "white"; 
}

function setupGrid(gridSize) {
	squaresContainer.replaceChildren();
	squaresContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
	squaresContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
	for (let i = 0; i < gridSize; ++i)
	{
		for (let j = 0; j < gridSize; ++j)
		{
			const square = document.createElement("div");
			square.classList.add("square");
			square.addEventListener('mouseenter', activateSquare);
			square.addEventListener('mouseleave', deactivateSquare);
			squaresContainer.appendChild(square);
		}
	}
}

function promptForNewGrid()
{
	while(true)
	{
		const input = prompt("Please input new grid size");
		if (input === null || input === "") return;
		const newGridSize = parseInt(input);
		
		if (isNaN(newGridSize))
		{
			alert("Got not a number!");
		}
		else if (newGridSize <= 0)
		{
			alert("New grid size too small, must be 1 or more!");
		}
		else if (newGridSize > maxGridSize)
		{
			alert(`New grid size too large, can't be over ${maxGridSize}!`);
		}
		else
		{
			setupGrid(newGridSize);
			return;
		}
	}
}

const newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener('click', () => promptForNewGrid());

setupGrid(startGridSize);