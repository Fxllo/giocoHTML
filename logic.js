var start = document.getElementById("title");
var score = document.getElementById("score");
var cont = 1;

//variable parts
var easy = document.getElementById("easy");
var normal = document.getElementById("normal");
var hard = document.getElementById("hard");

start.onclick = game;

function game () {
    start.remove(); //cancella bottone

    //remove menu
    easy.remove();
    normal.remove();
    hard.remove();

    const allGame = setTimeout(gameEnd, 60000); //tempo di gioco (60s)
    score.innerHTML = "Score: 0"; //creo score

    //create the target
    var img = document.createElement("img");
    img.src = "bro.png";
    document.body.appendChild(img);
    img.setAttribute ("id", "img"); //mette id img a img
    img.setAttribute("width", size);
    img.setAttribute("height", size);
    img.style.position = "absolute";
    img.style.left = Math.random() * (window.innerWidth - img.offsetWidth) + "px";
    img.style.top = Math.random() * (window.innerHeight - img.offsetHeight) + "px";

    //check click
    var checkImg = document.getElementById("img");
    checkImg.addEventListener("mouseover", function () {
        img.style.left = Math.random() * (window.innerWidth - img.offsetWidth) + "px";
        img.style.top = Math.random() * (window.innerHeight - img.offsetHeight) + "px";
        score.innerHTML = "Score: " + cont++;

        if (cont == 11) {
            img.remove();
            var div = document.createElement("div");
            div.innerHTML = "Sei un demone del SIUMM!!! <br> Hai vinto!!!";
            div.style.textAlign = "center";
            div.style.paddingTop = window.innerHeight / 2;
            div.style.fontSize = "60px";
            div.style.fontWeight = "bold";
            div.style.color = "coral";

            document.body.appendChild(div);
        }
    });
}

function gameEnd () {
    img.remove();
    var div = document.createElement("div");
    div.innerHTML = "Fai schifo!!! <br> Hai perso!!!";
    document.body.appendChild(div);
}

//buttton part
var size = "150px";
easy.onclick = function () {
    easy.style.color = "coral";
    normal.style.color = "white";
    hard.style.color = "white";
    size = "500px";
}

normal.onclick = function () {
    normal.style.color = "coral";
    easy.style.color = "white";
    hard.style.color = "white";
    size = "150px";
}

hard.onclick = function () {
    hard.style.color = "coral";
    easy.style.color = "white";
    normal.style.color = "white";
    size = "50px";
}