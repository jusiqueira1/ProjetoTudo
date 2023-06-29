animate = document.querySelector(".animate");
const animate2 = document.querySelector("#animate_2");
const animate3 = document.querySelector("#animate_3");
const animate5 = document.querySelector("#animate_5");
const animate6 = document.querySelector("#animate_6");


console.log(animate);

animate2.style.left = '600px';
animate2.style.top = '400px';

animate3.style.left = '300px';
animate3.style.top = '450px';

animate5.style.left = '900px';
animate5.style.top = '200px';

animate6.style.left = '500px';
animate6.style.top = '100px';

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
    if (x == 600 && y == 400) {
        window.location = "venceu.html";
    } else if (x == 300 && y == 450) {
        window.location = "perdeu.html";
    } else if (x == 900 && y == 200) {
        window.location = "perdeu.html";
    } else if (x == 500 && y == 100) {
        window.location = "jogo.html";
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