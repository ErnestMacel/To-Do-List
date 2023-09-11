let choresList = [];
renderPage();
function renderPage() {
  const container = document.querySelector(".chores-container");
  container.innerHTML = "";
  choresList.forEach((element) => {
    container.innerHTML += `<p data-item='${element}'>&bull;${element}</p>`;
  });
}
function addChores() {
  const inputBoxHtml = document.getElementById("chores-input");
  if (!(inputBoxHtml.value === "")) {
    choresList.push(inputBoxHtml.value);
    inputBoxHtml.value = "";
    renderPage();
  }
}

function resetChores() {
  choresList = [];
  renderPage();
}
document.getElementById("add-button").addEventListener("click", addChores);
document.getElementById("delete-button").addEventListener("click", resetChores);
