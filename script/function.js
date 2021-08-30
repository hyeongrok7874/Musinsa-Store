let openButton = document.getElementsByClassName("open-button")[0];
let leftMenu = document.getElementsByClassName("left-menu")[0];

openButton.onclick = function () {
    if (leftMenu.style.display != "none") {
        leftMenu.style.display = "none";
        openButton.style.left = "0px";
    }
    else {
        leftMenu.style.display = "inline-block";
        openButton.style.right = "6px";
        openButton.style.bottom = "383px";
    }
}