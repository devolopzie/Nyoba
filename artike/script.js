document.addEventListener("DOMContentLoaded", function () {
    // Load modal content into containers
    const modalContainers = {
        modal1: "modal1.html",
        modal2: "modal2.html",
        modal3: "modal3.html",
    };

    Object.keys(modalContainers).forEach((modalId) => {
        fetch(modalContainers[modalId])
            .then((response) => response.text())
            .then((html) => {
                document.getElementById(`${modalId}-container`).innerHTML = html;
            })
            .catch((error) => console.error(`Error loading ${modalId}:`, error));
    });
});
