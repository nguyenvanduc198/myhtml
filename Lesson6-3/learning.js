$(document).ready(() => {
    $("#sidebar").fadeIn(1000);
    $(".main-page").fadeIn(1000);
});

//
var currentId = 5;
function addItem() {
    const addingItem = $("[name=adding-item]")[0];

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

    $("#sidebar").append(newItem);
    $(`#${newCurrentId}`).fadeIn(1000, () => {
        $(`#${newCurrentId}`).animate(
            {
                left: "+2em"
            },
            () => {
                $(`#${newCurrentId - 4}`).animate(
                    {
                        left: "+2em"
                    },
                    () => {
                        $(`#${newCurrentId}`).animate({
                            left: "0"
                        });
                        $(`#${newCurrentId - 4}`).fadeOut(1000, () => {
                            window.alert(
                                "We have no other room for this items, so we deleted the first items"
                            );
                        });
                    }
                );
            }
        );
    });
    addingItem.value = "";
}

function deleteItem(id) {
    const sidebar = $(".sidebar");
    const currentItem = $(`#${id}`);
    if (currentItem) {
        currentItem.fadeOut(() => {
            window.alert("You have deleted 1 items");
        });
    }
}
