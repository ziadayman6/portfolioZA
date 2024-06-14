var arrow1 = document.querySelector('.arrow1');
var arrow2 = document.querySelector('.arrow2');
var arrow3 = document.querySelector('.arrow3');
var arrow4 = document.querySelector('.arrow4');
var container1 = document.querySelector('.container1');
var container2 = document.querySelector('.container2');
var container3 = document.querySelector('.container3');
var container4 = document.querySelector('.container4');
var uparrow = document.getElementById('upp')

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
    } else {
        container2.style.height = '0px';
        container2.style.transition = 'height 0.5s ease'
        arrow2.classList.remove('rotated')
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