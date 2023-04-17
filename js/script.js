document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((element) => {
        element.addEventListener('click', (e) => {
            var clicked = e.target
            let parent = e.target.parentElement
            let infocontainer = parent.nextElementSibling
            clicked.classList.toggle("fa-window-minimize")
            clicked.classList.toggle("fa-window-maximize")
            clicked.classList.toggle("minimize")
            clicked.classList.toggle("maximize")
            infocontainer.classList.toggle("contracted")
            infocontainer.classList.toggle("expanded")
        })
})
}, false);
