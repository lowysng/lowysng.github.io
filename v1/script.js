document.addEventListener('scroll', () => {

    let nav = document.getElementById('nav')

    if (window.scrollY !== 0) {
        nav.style.borderBottom = '2px solid #1f1f1f';
        // nav.style.backgroundColor = '#1f1f1f';


    } else {
        nav.style.borderBottom = '2px solid transparent';
        // nav.style.backgroundColor = '#fff';
    }

})
