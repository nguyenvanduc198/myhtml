$(document).ready(() => {
    $("#sidebar").fadeIn(1000);
    $(".main-page").fadeIn(1000);
});

//
var currentId = 5;
function addItem() {
    const addingItem = $("[name=adding-item]")[0];

    const currentItem = document.getElementById("sidebar");

    currentId += 1;

    // This is needed for new created items to be able to react with event
    // Try to remove this 2 line to see the result
    const newItem = document.createElement("a");
    const newCurrentId = currentId;
    newItem.href = "#";
    newItem.ondblclick = () => deleteItem(newCurrentId);
    newItem.id = newCurrentId;
    newItem.classList = "list-group-item list-group-item-action";
    newItem.innerText = addingItem.value;
    newItem.style.display = "none";
    // In bigger project, doing this for every events may costing time. So people
    // often use other libraries to deal with this problem

    currentItem.appendChild(newItem);
    $(`#${newCurrentId}`).fadeIn(1000);
    addingItem.value = "";
}

function deleteItem(id) {
    const sidebar = $(".sidebar");
    const currentItem = $(`#${id}`);
    if (currentItem) {
        currentItem.fadeOut();
    }
}
