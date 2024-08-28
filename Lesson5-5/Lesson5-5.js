var currentId = 5;
function addItem() {
    const addingItem = document.getElementsByName("adding-item")[0];

    const currentItem = document.getElementById("sidebar");

    currentId += 1;

    // This is needed for new created items to be able to react with event
    // Try to remove this 2 line to see the result
    const newItem = document.createElement("a");
    const newCurrentId = currentId;
    newItem.href = "#";


    /*cach viet co ban
     newItem.ondblclick = function(){
        deleteItem(newCurrentId);
    } */
    // dong duoi khong can viet {} 
    // newItem.ondblclick = () => deleteItem(newCurrentId) cung ok
     newItem.ondblclick = () => { deleteItem(newCurrentId) }


    newItem.id = newCurrentId;
    newItem.classList = "list-group-item list-group-item-action";
    newItem.innerText = addingItem.value;
    // In bigger project, doing this for every events may costing time. So people
    // often use other libraries to deal with this problem

    currentItem.appendChild(newItem);
    addingItem.value = "";
}

function deleteItem(id) {
    console.log(id);
    const sidebar = document.getElementById("sidebar");
    const currentItem = document.getElementById(id);
    if (currentItem) {
        sidebar.removeChild(currentItem);
    }
}
