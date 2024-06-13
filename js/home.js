var arrow1 = document.querySelector('.arrow1');
var arrow2 = document.querySelector('.arrow2');
var arrow3 = document.querySelector('.arrow3');
var arrow4 = document.querySelector('.arrow4');
var container1 = document.querySelector('.container1');
var container2 = document.querySelector('.container2');
var container3 = document.querySelector('.container3');
var container4 = document.querySelector('.container4');
var hlines = document.querySelectorAll('.hline1, .hline2, .hline3, .hline4, .hline5');
var numms = document.querySelectorAll('.numm');
var nums = document.querySelectorAll('.num')
var uparrow = document.getElementById('upp')

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && !entry.target.classList.contains("counted")) {
            counting(entry.target);
            entry.target.classList.add("counted")
        }
    });
}, { threshold: 0.1 });

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate');
        } 
    });
});

arrow1.addEventListener('click', function() {
    if (container1.style.height === '0px' || !container1.style.height) {
        container1.style.transition = 'height 1s ease'
        container1.style.height = container1.scrollHeight + 'px';
        arrow1.classList.add('rotated')
    } else {
        container1.style.height = '0px';
        container1.style.transition = 'height 0.5s ease'
        arrow1.classList.remove('rotated')
    }
});

arrow2.addEventListener('click', function() {
    if (container2.style.height === '0px' || !container2.style.height) {
        container2.style.transition = 'height 1s ease'
        container2.style.height = container2.scrollHeight + 'px';
        arrow2.classList.add('rotated')
            
        hlines.forEach(hline => {
            observer.observe(hline);
        });            

        numms.forEach(numm => {
            numm.style.display = "block"
        });            

        nums.forEach(num => {
            observer2.observe(num)
        })

    } else {
        container2.style.height = '0px';
        container2.style.transition = 'height 0.5s ease'
        arrow2.classList.remove('rotated')

        hlines.forEach(hline => {
            hline.classList.remove('animate')
        })

        numms.forEach(numm => {
            numm.style.display = "none"
        });            

        nums.forEach(num => {
            num.classList.remove("counted")
        })
    }
});

arrow3.addEventListener('click', function() {
    if (container3.style.height === '0px' || !container3.style.height) {
        container3.style.transition = 'height 1s ease'
        container3.style.height = container3.scrollHeight + 'px';
        arrow3.classList.add('rotated')
    } else {
        container3.style.height = '0px';
        container3.style.transition = 'height 0.5s ease'
        arrow3.classList.remove('rotated')
    }
});

arrow4.addEventListener('click', function() {
    if (container4.style.height === '0px' || !container4.style.height) {
        container4.style.transition = 'height 1s ease'
        container4.style.height = container4.scrollHeight + 'px';
        arrow4.classList.add('rotated')
    } else {
        container4.style.height = '0px';
        container4.style.transition = 'height 0.5s ease'
        arrow4.classList.remove('rotated')
    }
});

function counting(element){
    var start = 0
    var end = parseInt(element.getAttribute("data-val"))
    var counter = setInterval(function(){
        start += 1;
        element.textContent = start
        if (start == end) {
            clearInterval(counter)
        }
    },3)
}