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
            if(clicked.closest(".card").querySelector(".card-body").classList.contains("contracted")) {
                clicked.closest(".card").style.opacity = "0.8"
            } else if(clicked.closest(".card").querySelector(".card-body").classList.contains("expanded")) {
                clicked.closest(".card").style.opacity = "1"
            }

            /*
            if (window.jQuery) {
                // jQuery is loaded
                console.log("jQuery is loaded")
            } else {
                // jQuery is not loaded
                console.log("jQuery is not loaded")
            }

            /*
            console.log("------------")
            console.log("Clicked element's parent:")
            console.log(parent)
            console.log("------------")
            
            /*
            console.log(clicked)
            if (infocontainer.classList.contains("card-body")) {
                let elementToSlide = parent.nextElementSibling
                if (elementToSlide.classList.contains('hidden')) {
                    elementToSlide.classList.remove('hidden')
                } else if (!elementToSlide.classList.contains('hidden')) {
                    elementToSlide.classList.add('hidden')
                }
                clicked.classList.toggle("fa-window-minimize").toggle("fa-window-maximize").toggle("minimize").toggle("maximize")
            }
            */
        })
})
}, false);