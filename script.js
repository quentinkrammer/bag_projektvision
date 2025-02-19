window.onload = function () {
  const windowModal = document.getElementById("window-modal");
  const windowModalHeader = document.getElementById("window-modal-header");
  const windowModalContent = document.getElementById("window-modal-content");
  const windowModalCloseButton = document.getElementById(
    "window-modal-close-button"
  );
  const imageElements = document.querySelectorAll("#image-container img");

  imageElements.forEach((imageElement) =>
    imageElement.addEventListener("click", onImageClick)
  );
  windowModalCloseButton.addEventListener("click", () =>
    windowModal.hidePopover()
  );

  function onImageClick(e) {
    const imageTexts = {
      blue: { header: "Blue header", content: "Blue content" },
      green: { header: "Green header", content: "Green content" },
      yellow: { header: "Yellow header", content: "Yellow content" },
    };

    const dataName = e.target.getAttribute("data-name");
    const { header, content } = imageTexts[dataName];
    windowModalHeader.textContent = header;
    windowModalContent.textContent = content;
    windowModal.showPopover();
  }
};
