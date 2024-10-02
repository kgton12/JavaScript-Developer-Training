const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains("open");

        if (isOpen) {
            acordeon.classList.remove("open");
        } else {
            acordeon.classList.add("open");
        }

        const icon = trigger.querySelector(".fas");
        if (icon) {
            if (icon.classList.contains("fa-chevron-down")) {
                icon.classList.replace("fa-chevron-down", "fa-chevron-up");
            } else {
                icon.classList.replace("fa-chevron-up", "fa-chevron-down");
            }
        }
    });
});
