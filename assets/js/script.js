const navBarItem = document.querySelectorAll('.nav-bar li a');
const navBarTop = document.getElementById('nav-fixed');

// add class 'active' to active nav item
for (let i = 0; i < navBarItem.length; i++) {
    navBarItem[i].addEventListener('click', function() {
        document.querySelector('.nav-bar .active').classList.remove('active');
        this.classList.add('active');
    });
}

//change color of nav's background during scrolling
window.addEventListener('scroll', function() {
    console.log(document.body.scrollTop);
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 100) {
        navBarTop.style.background = 'linear-gradient(rgba(76, 61, 114, 0.7), rgba(76, 61, 114, 0.7))';
    }
    else {
        navBarTop.style.background = 'transparent';
    }
});

