document.addEventListener("DOMContentLoaded", () => {
  const holder = document.querySelector("#holder");
  const answer = document.querySelector("#answer");
  const button = document.querySelector("#ok");

  function createGrid(store) {
    holder.innerHTML = '';
    const squareSize = 480 / store;

    for (let i = 0; i < store * store; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      holder.appendChild(square);

      square.addEventListener("mouseover", () => {
        if (selectedColor) {
          square.style.backgroundColor = selectedColor;
        }
      });
    }
  }

  button.addEventListener("click", () => {
    let store = parseInt(answer.value, 10);
    if (!isNaN(store) && store > 0) {
      createGrid(store);
    } else {
      alert("Please enter a valid number greater than 0.");
    }
    answer.value = "";
  });

  let selectedColor = null;

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      selectedColor = getComputedStyle(event.target).backgroundColor;
    });
  });

  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.style.backgroundColor = "";
    });
  });

  const eraserButton = document.querySelector("#eraser");
  eraserButton.addEventListener("click", () => {
    selectedColor = "white";
  });
});
