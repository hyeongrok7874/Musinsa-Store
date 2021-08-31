let head = document.getElementsByClassName("head");
let sign = document.getElementsByClassName("sign");

function signChange(a){
    if (sign[a].innerHTML == "+") {
        sign[a].innerHTML = "-";
        console.log("성공");
    }
    else {
        sign[a].innerHTML = "+";
        console.log("실패");
    }
}
for (let i = 0; i < 23; i++){
    head[i].onclick = function () {
        signChange(i);
    }
}

