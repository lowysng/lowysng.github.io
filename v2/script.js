document.addEventListener('scroll', () => {

    let nav = document.getElementById('nav')
    let jump = document.getElementById('jump')

    if (window.scrollY !== 0) {
        nav.style.borderBottom = '2px solid lightgray';
        nav.style.backgroundColor = '#fff';
        jump.style.color = '#2b2b2b'


    } else {
        nav.style.borderBottom = '2px solid transparent';
        nav.style.backgroundColor = '#fafafa';
        jump.style.color = 'transparent'

    }

})
