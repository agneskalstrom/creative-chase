const menuAbout = document.getElementById("menu-about");
const menuPosters = document.getElementById("menu-posters");
const menuShop = document.getElementById("menu-shop");

menuAbout.addEventListener("click", scrollAbout);
menuPosters.addEventListener("click", scrollPosters);
menuShop.addEventListener("click", scrollShop);

function scrollAbout() {
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "center"});
}

function scrollPosters() {
    document.getElementById("posters").scrollIntoView({behavior: "smooth", block: "center"});
}

function scrollShop() {
    document.getElementById("order").scrollIntoView({behavior: "smooth", block: "center"});
}

const priceTag = document.getElementById("price");
const preview = document.getElementById("preview");
let size; 
let total;
let previewPrice;

function calculatePrice () {
    if (preview.checked == true) {
        previewPrice = 99;
    }
    else {
        previewPrice = 0;
    }
    previewPrice
    size = document.getElementById("size").value;
    total = +size + +previewPrice;
    priceTag.innerHTML = total + " kr";
}
