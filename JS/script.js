document.querySelector('video').playbackRate = 0.2;

const animation = document.querySelectorAll('.animation') 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.8,
})

animation.forEach(animation => {
    observer.observe(animation)
})

// Animate images

const floatup = document.querySelectorAll('.floatup-one') 

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.0,
    rootMargin: "170px"
})

floatup.forEach(floatup => {
    observer2.observe(floatup)
})

// No. 2 image

const floatup2 = document.querySelectorAll('.floatup-two') 

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.0,
    rootMargin: "170px"
})

floatup2.forEach(floatup2 => {
    observer2.observe(floatup2)
})

const floatup3 = document.querySelectorAll('.floatup-three') 

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.0,
    rootMargin: "170px"
})

floatup3.forEach(floatup3 => {
    observer4.observe(floatup3)
})

const floatup4 = document.querySelectorAll('.floatup-four') 

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.0,
    rootMargin: "170px"
})

floatup4.forEach(floatup4 => {
    observer5.observe(floatup4)
})


//designet af

const designetaf = document.querySelector('.designet-af-class').addEventListener('click', function() {
    let divElement = document.querySelector(".card");
    divElement.classList.remove("gem-popup");
});

const okay = document.querySelector('.button-primary').addEventListener('click', function() {
    let divElement = document.querySelector(".card");
    divElement.classList.add("gem-popup");
});


// Invert logo to make it visible in each sektion
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if (scroll < 1350) {
        console.log(scroll)
        document.getElementById("mux-logo").style.filter = "invert(0%)";
    } else if (scroll > 1300 && scroll < 1900) {
        document.getElementById("mux-logo").style.filter = "invert(100%)";
    } else if (scroll > 1900 && scroll < 2980) {
        console.log(scroll)
        document.getElementById("mux-logo").style.filter = "invert(0%)";
    } else if (scroll > 2980) {
        document.getElementById("mux-logo").style.filter = "invert(100%)";
    }
 });