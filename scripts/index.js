let choresList = [];
renderPage();
function renderPage() {
  const container = document.querySelector(".chores-container");
  container.innerHTML = "";
  choresList.forEach((element) => {
    container.innerHTML += `
    <div class="chores-bar" id="${element.No}">
    <p>&bull;${element.name}</p>
    <button class="remove-button" data-id="${element.No} ">
    remove</button>
    </div>`;
    document.querySelectorAll(".remove-button").forEach((element) => {
      element.addEventListener("click", () => {
        removeChores(element.dataset.id);
      });
    });
  });
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
