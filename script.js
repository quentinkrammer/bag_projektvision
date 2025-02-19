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

function openModal(objectID) {
    let modal = document.getElementById("modal");
    let backdrop = document.getElementById("backdrop");
    modal.children[1].textContent = modalData[objectID].title;
    modal.children[2].textContent = modalData[objectID].text;
    backdrop.style.display = "block"
    modal.showPopover();
}
function closeModal() {
    let modal = document.getElementById("modal");
    let backdrop = document.getElementById("backdrop");
    modal.hidePopover();
    backdrop.style.display = "none"
}

window.addEventListener("load", () => {
    let objects = document.getElementsByClassName("object");
    Array.from(objects).forEach((object) => {
        object.addEventListener("click", () => {openModal(object.id)} );
    })
})
