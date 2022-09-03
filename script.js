//applies the grid layout of n*n
function applyGrid(n) {
    const containerSquares = document.getElementById("container-squares");
    containerSquares.textContent = "";
    for (let i = 0; i < n*n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        containerSquares.appendChild(square);
    }
    cssRule(n);
}

//applies new style dynamically based on grid size
function cssRule (n) {
    const sheet = document.styleSheets[0];
    const rules = sheet.cssRules;
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText == "#container-squares") {
            const gridTemplate = `${100/n}% `.repeat(n).trimEnd();
            document.styleSheets[0].cssRules[i].style.gridTemplateColumns = gridTemplate;
        }
    }
}

//allows user to change size of grid
const btn = document.getElementById("grid-size");
btn.addEventListener("click", n => {
    const request = prompt("What size layout would you like this grid to have?", n);
    if (isNaN(request)) {
        alert("value entered must be a number")
    } else if (request > 100) {
        alert("Grid cannot exceed 100 x 100")
    } else {
        applyGrid(Math.floor(request))
    }
})

//apply an initial grid of 16x16
applyGrid(16);