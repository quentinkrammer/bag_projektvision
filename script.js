var objects = document.getElementsByClassName("object");
const modalData = {
    blue: {
        "title": "Blue",
        "text": "Lorem Ipsum"
    },
    green: {
        "title": "Green",
        "text": "Lorem Ipsum"
    },
    yellow: {
        "title": "Yellow",
        "text": "Lorem Ipsum"
    }
};

function showModal(objectID) {
    let modal = document.getElementById("modal");
    modal.children[0].textContent = modalData[objectID].title;
    modal.children[1].textContent = modalData[objectID].text;
    modal.togglePopover();
}

window.addEventListener("load", function () {
    Array.from(objects).forEach(function(object) {
        object.addEventListener("click", () => {showModal(object.id);} );
    })
})
