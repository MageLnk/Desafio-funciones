let colorSave = "";
const originalColors = ["yellow", "blue", "green", "purple"];

const paintDiv = (target, color) => {
  document.querySelector(`#${target}`).style.backgroundColor = color;
};
const paintSelectedColorSquare = (color) => {
  document.querySelector("#colorSelected").style.backgroundColor = color;
};
const resetColors = () => {
  console.log("Probando");
  paintSelectedColorSquare("white");
  colorSave = "";
  for (i = 0; i <= 3; i++) {
    paintDiv(
      document.querySelectorAll("#list")[0].children[i].id,
      originalColors[i]
    );
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    colorSave = "red";
    paintSelectedColorSquare(colorSave);
  }
  if (e.key === "s") {
    colorSave = "orange";
    paintSelectedColorSquare(colorSave);
  }
  if (e.key === "d") {
    colorSave = "pink";
    paintSelectedColorSquare(colorSave);
  }
});

document.addEventListener("click", (e) => {
  if (!colorSave) {
    return;
  }
  paintDiv(e.target.id, colorSave);
});
