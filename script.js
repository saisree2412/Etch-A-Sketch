const container = document.getElementById("grid-container");

const squaresInRow = 16;

// Create a 16x16 grid
for (let i = 0; i < squaresInRow * squaresInRow; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");

    // Add event listener for mouseover
    gridSquare.addEventListener("mouseover", handleMouseOver);

    container.appendChild(gridSquare);
}

function handleMouseOver(event) {
    // Get the hovered grid square
    const hoveredSquare = event.target;

    // Change the background color of the hovered square
    hoveredSquare.style.backgroundColor = "red";

    // Change the background color of neighboring squares
    const neighbors = getNeighbors(hoveredSquare);
    neighbors.forEach(neighbor => {
        neighbor.style.backgroundColor = "red";
    });
}

function getNeighbors(square) {
    // Get the index of the hovered square
    const index = Array.from(square.parentNode.children).indexOf(square);

    // Define the indices of neighboring squares
    const neighborIndices = [
        index - 1, index + 1,        // Left and right
        index - squaresInRow,        // Above
        index + squaresInRow         // Below
    ];

    // Filter out invalid indices
    const validIndices = neighborIndices.filter(idx =>
        idx >= 0 && idx < squaresInRow * squaresInRow
    );

    // Return the neighboring squares
    return validIndices.map(idx =>
        Array.from(square.parentNode.children)[idx]
    );
}



