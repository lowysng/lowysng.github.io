document.addEventListener('scroll', () => {

    let nav = document.getElementById('nav')

    if (window.scrollY !== 0) {
        nav.style.borderBottom = '2px solid lightgray';
        nav.style.backgroundColor = '#fff';


    } else {
        nav.style.borderBottom = '2px solid transparent';
        nav.style.backgroundColor = '#fafafa';
    }

})
