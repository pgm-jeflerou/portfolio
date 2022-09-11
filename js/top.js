(() => {

    const startPos = window.pageYOffset

    const $top = document.querySelector('.top');
    $top.style.visibility = 'hidden';

    window.onscroll = () => {
        const currentPos = window.pageYOffset
        if(startPos != currentPos) {
            $top.style.visibility = 'visible'
        } else {
            $top.style.visibility = 'hidden';
        }
    };

})();