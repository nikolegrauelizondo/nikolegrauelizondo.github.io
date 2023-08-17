function options(evt, info) {
    let i, tabContent, link;

    tabContent = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    link = document.getElementsByClassName('link');
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(' active', '');
    }

    document.getElementById(info).style.display = 'block';
    evt.currentTarget.className += ' active';
}