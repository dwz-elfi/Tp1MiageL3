//alert("Test")
const carre = document.getElementById("cRouge");
const couleur = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
const zone = document.getElementById("zone");
const bonus2 = document.getElementById("bonus2");
const header = document.getElementById("header");
const scrollText = document.getElementById("scrollh1");
const input = document.getElementById("text");
const btn = document.getElementById("btn-text");
const valeur = document.getElementById("valeur");



carre.addEventListener("click", function() {
    carre.style.backgroundColor = couleur[Math.floor(Math.random()*couleur.length)];
    console.log(couleur);
});

zone.addEventListener("mousemove", function(e) {
    bonus2.style.display = "flex";
    bonus2.style.position = "absolute";
    bonus2.style.left = e.x + "px";
    bonus2.style.top = e.y + "px";
    console.log(e.x, e.y);
});

zone.addEventListener("mouseleave", function() {
    bonus2.style.display = "none";
});


window.addEventListener("scroll", function() {
    header.style.backgroundColor = "lightgreen";
    scrollText.textContent = "Position Y : " + window.scrollY;
    console.log(window.scrollY);
});

btn.addEventListener("click", function(e) {
    e.preventDefault();
    valeur.textContent = input.value;
});

