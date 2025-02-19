window.onload = function () {
  const imageTexts = {
    blue: {
      header: "Blue header",
      smallContent: "Blue content",
      largeContent: "Blue large",
    },
    green: {
      header: "Green header",
      smallContent: "Green content",
      largeContent: "Green large",
    },
    yellow: {
      header: "Yellow header",
      smallContent: "Yellow content",
      largeContent: "Yellow large",
    },
  };

  const smallModal = document.getElementById("small-modal");
  const smallModalHeader = document.getElementById("small-modal-header");
  const smallModalContent = document.getElementById("small-modal-content");
  const smallModalCloseButton = document.getElementById(
    "small-modal-close-button"
  );
  const largeModal = document.getElementById("large-modal");
  const largeModalHeader = document.getElementById("large-modal-header");
  const largeModalContent = document.getElementById("large-modal-content");
  const largeModalCloseButton = document.getElementById(
    "large-modal-close-button"
  );
  const imageElements = document.querySelectorAll("#image-container img");
  const openLargeModalButton = document.getElementById(
    "open-large-modal-button"
  );

  imageElements.forEach((imageElement) =>
    imageElement.addEventListener("click", onOpenSmallModal)
  );
  smallModalCloseButton.addEventListener("click", () =>
    smallModal.hidePopover()
  );
  openLargeModalButton.addEventListener("click", onOpenLargeModal);
  largeModalCloseButton.addEventListener("click", () =>
    largeModal.hidePopover()
  );

  function onOpenLargeModal(e) {
    const dataName = e.target.getAttribute("data-name");
    const { header, largeContent } = imageTexts[dataName];

    largeModalHeader.textContent = header;
    largeModalContent.textContent = largeContent;
    largeModal.showPopover();
  }

  function onOpenSmallModal(e) {
    const dataName = e.target.getAttribute("data-name");
    const { header, smallContent } = imageTexts[dataName];

    openLargeModalButton.setAttribute("data-name", dataName);

    smallModalHeader.textContent = header;
    smallModalContent.textContent = smallContent;
    smallModal.showPopover();
  }
};
