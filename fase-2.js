animate = document.querySelector(".animate");
const animate3 = document.querySelector("#animate_3");
const animate4 = document.querySelector("#animate_4");

console.log(animate);

animate3.style.left = '700px';
animate3.style.top = '500px';

animate4.style.left = '400px';
animate4.style.top = '200px';

var posTop = 0;
var posLeft = 0;
var step = 50;

var window_x = 1230;
var window_y = 550;

var windowSize = function (win_x, win_y, p_x, p_y) {

    if (p_x < 0 || p_y < 0) {
        return false;
    } else if (win_x < p_x || win_y < p_y) {
        console.log("entrou")
        return false;
    } else {
        return true;
    };
};

var novaFase = function (x, y) {
    if (x == 700 && y == 500) {
        window.location = "fase-3.html";
    } else if (x == 400 && y == 200) {
        window.location = "fase-3.html";
    } else {
        return false;
    }
}

document.onkeydown = function (event) {

    console.log(animate.style.top);

    let key = event.key;

    if (key === "ArrowUp") {
        if (windowSize(window_x, window_y, posLeft, posTop - step)) {
            posTop -= step;
            animate.style.top = posTop + "px";
            novaFase(posLeft, posTop);
        }
    } else if (key === "ArrowDown") {
        if (windowSize(window_x, window_y, posLeft, posTop + step)) {
            posTop += step;
            animate.style.top = posTop + "px";
            novaFase(posLeft, posTop);
        }
    } else if (key === "ArrowLeft") {
        if (windowSize(window_x, window_y, posLeft - step, posTop)) {
            posLeft -= step;
            animate.style.left = posLeft + "px";
            novaFase(posLeft, posTop);
        }
    } else if (key === "ArrowRight") {
        if (windowSize(window_x, window_y, posLeft + step, posTop)) {
            posLeft += step;
            animate.style.left = posLeft + "px";
            novaFase(posLeft, posTop);
        }
    };
};