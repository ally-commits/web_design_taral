let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let openContent = document.getElementById("open-content");
let headerSlider = document.getElementById("slider");

let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let images = ['url("../img/slider-img.jpg")','url("../img/img1.jpg")'];
let i = 0;
let n = images.length;
openBtn.addEventListener("click",() => {
    openContent.style.display = "flex";
});

closeBtn.addEventListener("click",() => {
    openContent.style.display = "none";
});

leftBtn.addEventListener("click",() => {
    i == 0 ? i = n - 1 : i--;
    headerSlider.style.backgroundImage = images[i];
});

rightBtn.addEventListener("click",() => {
    i == n-1 ? i = 0 : i++;
    headerSlider.style.backgroundImage = images[i];
});


