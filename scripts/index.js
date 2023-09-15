let choresList = JSON.parse(localStorage.getItem("to-do")) || [];

renderPage();


function renderPage() {
  const container = document.querySelector(".chores-container");
  container.innerHTML = "";
  choresList.forEach((element) => {
    container.innerHTML += `
    <div class="chores-bar" id="${element.No}">
    <p>&bull; ${element.name}</p>
    <button class="remove-button" data-id="${element.No} ">Remove</button>
    </div>`;
    document.querySelectorAll(".remove-button").forEach((element) => {
      element.addEventListener("click", () => {
        removeChores(element.dataset.id);
      });
    });
  });
  saveLocal();
}

function addChores() {
  const inputBoxHtml = document.getElementById("chores-input");
  if (!(inputBoxHtml.value === "")) {
    choresList.push({ name: inputBoxHtml.value, No: choresList.length + 1 });
    inputBoxHtml.value = "";
    renderPage();
  }
}

function resetChores() {
  choresList = [];
  renderPage();
}

function removeChores(id) {
  const newList = choresList.filter((element) => {
    return !(element.No === Number(id));
  });
  choresList = newList;
  renderPage();
}

document.getElementById("add-button").addEventListener("click", addChores);
document.getElementById("delete-button").addEventListener("click", resetChores);

function saveLocal() {
  localStorage.setItem("to-do", JSON.stringify(choresList));
}

function isEnterPress(event){
  if (event.key==="Enter"){
    addChores();
  }
}