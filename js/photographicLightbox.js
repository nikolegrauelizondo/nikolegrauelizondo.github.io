var modal = document.getElementById("modal01");
var img = document.getElementById("myImg01");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("tittle01");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var closesure = document.getElementsByClassName("close01")[0];
closesure.onclick = function () {
    modal.style.display = "none";
}

// ***

var modal = document.getElementById("modal02");
var img = document.getElementById("myImg02");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("tittle02");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var closesure = document.getElementsByClassName("close02")[0];
closesure.onclick = function () {
    modal.style.display = "none";
}

// ***

var modal = document.getElementById("modal03");
var img = document.getElementById("myImg03");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("tittle03");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var closesure = document.getElementsByClassName("close03")[0];
closesure.onclick = function () {
    modal.style.display = "none";
}

// ***

var modal = document.getElementById("modal04");
var img = document.getElementById("myImg04");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("tittle04");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var closesure = document.getElementsByClassName("close04")[0];
closesure.onclick = function () {
    modal.style.display = "none";
}