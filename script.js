const componentData = {
    blue: {
        "id": "blue",
        "title": "Blue",
        "overviewText": "Lorem Ipsum",
        "detailsText": "Lorem Ipsum 1"
    },
    green: {
        "id": "green",
        "title": "Green",
        "overviewText": "Lorem Ipsum",
        "detailsText": "Lorem Ipsum 1"
    },
    yellow: {
        "id": "yellow",
        "title": "Yellow",
        "overviewText": "Lorem Ipsum",
        "detailsText": "Lorem Ipsum 1"
    }
};
var currentComponent = null;

function openOverview(componentID) {
    currentComponent = componentData[componentID];
    let overview = document.getElementById("overview");
    let backdrop = document.getElementById("overviewBackdrop");

    overview.querySelector("h1").textContent = currentComponent.title;
    overview.querySelector("p").textContent = currentComponent.overviewText;

    backdrop.style.display = "block"
    overview.showPopover();

}
function closeOverview() {
    let overview = document.getElementById("overview");
    let backdrop = document.getElementById("overviewBackdrop");

    overview.hidePopover();
    backdrop.style.display = "none";
}

function openDetails() {
    let details = document.getElementById("details");
    let visionComponent = document.getElementById(currentComponent.id);

    details.querySelector("#titleContainer h1").textContent = currentComponent.title;
    details.querySelector("#descriptionContainer p").textContent = currentComponent.detailsText;
    details.querySelector("#shownComponent").src = visionComponent.src;

    closeOverview();
    details.showPopover();
}

function closeDetails() {
    let details = document.getElementById("details");
    details.hidePopover();
}

window.addEventListener("load", () => {
    let components = document.getElementsByClassName("visionComponent");
    Array.from(components).forEach((component) => {
        component.addEventListener("click", () => {openOverview(component.id)} );
    })
})
