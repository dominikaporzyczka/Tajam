const navBarItem = document.querySelectorAll('.nav-bar li a');

for (let i = 0; i < navBarItem.length; i++) {
    navBarItem[i].addEventListener('click', function() {
        document.querySelector('.nav-bar .active').classList.remove('active');
        this.classList.add('active');
    });
}
