const objectData = {
    blue: {
        "title": "Blue",
        "modalText": "Lorem Ipsum",
        "detailsText": "Lorem Ipsum 1"
    },
    green: {
        "title": "Green",
        "modalText": "Lorem Ipsum",
        "detailsText": "Lorem Ipsum 1"
    },
    yellow: {
        "title": "Yellow",
        "modalText": "Lorem Ipsum",
        "detailsText": "Lorem Ipsum 1"
    }
};
var currentObject = null;

function openModal(objectID) {
    currentObject = objectID;
    let modal = document.getElementById("modal");
    let backdrop = document.getElementById("backdrop");
    modal.children[1].textContent = objectData[objectID].title;
    modal.children[2].textContent = objectData[objectID].modalText;
    backdrop.style.display = "block"
    modal.showPopover();

}
function closeModal(inclBackdrop) {
    let modal = document.getElementById("modal");
    let backdrop = document.getElementById("backdrop");
    modal.hidePopover();
    if(inclBackdrop) { backdrop.style.display = "none"; }
}

function openDetails() {
    let details = document.getElementById("details");
    let backdrop = document.getElementById("backdrop");
    let object = document.getElementById(currentObject);
    details.children[1].textContent = objectData[currentObject].title;
    details.children[2].textContent = objectData[currentObject].detailsText;
    closeModal(false);
    object.classList.remove("liftable");
    object.classList.add("fullscreen");
    details.showPopover();
    backdrop.classList.add("transparent");
}

function closeDetails() {
    let details = document.getElementById("details");
    let backdrop = document.getElementById("backdrop");
    let object = document.getElementById(currentObject);
    object.classList.remove("fullscreen");
    object.classList.add("liftable");
    details.hidePopover();
    backdrop.style.display = "none";
    backdrop.classList.remove("transparent");
}

window.addEventListener("load", () => {
    let objects = document.getElementsByClassName("object");
    Array.from(objects).forEach((object) => {
        object.addEventListener("click", () => {openModal(object.id)} );
    })
})
