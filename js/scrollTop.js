document.getElementById('arrowUpButton').style.display = 'none';
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById('arrowUpButton').style.display = 'block';
    } else {
        document.getElementById('arrowUpButton').style.display = 'none';
    }
}