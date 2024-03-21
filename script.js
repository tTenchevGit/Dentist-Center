document.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    document.querySelector('#hero').style.backgroundPositionY = offset * 0.5 + 'px';
});
