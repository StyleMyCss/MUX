document.querySelector('video').playbackRate = 0.2;

// let path = document. querySelector('path')
// let pathlength = path.getTotalLength()

// path.style.strokeDasharray = pathlength + ' ' + pathlength;

// path.style.strokeDashoffset = pathlength;

// window.addEventListener('scroll', () => {

//     //Hvor mange procent nede af side er vi?

//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
//     //Hvor meget skal den tegne

//     var drawLength = pathlength * scrollPercentage;

//     // Tag baglæns

//     path.style.strokeDashoffset = pathlength - drawLength;
// })

var mySVG = document.getElementById('svg1');
mySVG.setAttribute("viewBox", "0 -12 300 12");

var mySVG = document.getElementById('svg2');
mySVG.setAttribute("viewBox", "0 -12 300 12.5");


const animation = document.querySelectorAll('class for animationer') 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 1;
})

animation.forEach(card => {
    observer.observe(animation)
})