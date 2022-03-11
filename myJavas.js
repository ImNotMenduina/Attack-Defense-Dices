var stop_interval;
var stop_interval2;
var player_yellow;
var player_red;

let arrayDices = document.getElementsByClassName("arrayDices");
let randomNumbOut = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
let path_initial = arrayDices[randomNumbOut].getAttribute("src");

document.getElementById("viewImg").setAttribute("src", path_initial)


document.getElementById("play1").onclick = function () {

    let path;
    let sec = new Date().getTime();
    stop_interval = setInterval(function () {
        let current_sec = new Date().getTime();
        let past_time = current_sec - sec;
        let past_sec = Math.floor(past_time / 1000);


        let randomNumb = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

        path = arrayDices[randomNumb].getAttribute("src");

        function to_string(past_sec) {
            if (past_sec < 10) {
                return "0" + past_sec.toString();
            }
            else {
                return past_sec;
            }
        }

        document.getElementById("past_time").innerHTML = to_string(past_sec);
        document.getElementById("viewImg").setAttribute("src", path);

        if (past_sec == 5) {
            player_yellow = arrayDices[randomNumb].id;

                window.clearInterval(stop_interval);
            }

    }, 150);
}


var redDices = document.getElementsByClassName("arrayDicesRed");
let randomDiceRed = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
let path_initial2 = redDices[randomDiceRed].getAttribute("src");

document.getElementById("viewImg2").setAttribute("src", path_initial2);

document.getElementById("play2").onclick = function () {
    let sec2 = new Date().getTime();
    stop_interval2 = setInterval(function () {
        let current_sec2 = new Date().getTime();
        let past_time2 = current_sec2 - sec2;
        let past_sec2 = Math.floor(past_time2 / 1000);

        var randomNumb2 = Math.floor(Math.random() * (5 - 0 + 1)) + 0
        let path2 = redDices[randomNumb2].getAttribute("src");

        function to_string(past_sec) {
            if (past_sec < 10) {
                return "0" + past_sec.toString();
            }
            else {
                return past_sec;
            }
        }

        document.getElementById("past_time2").innerHTML = to_string(past_sec2);
        document.getElementById("viewImg2").setAttribute("src", path2);

        if (past_sec2 == 5) {
            player_red = redDices[randomNumb2].id;;

            window.clearInterval(stop_interval2);

            }

    }, 150)
}

let verifica = setInterval(function(){
    if(player_red&&player_yellow){
        if(player_yellow>player_red){

            document.getElementById("resultado").style["background-color"] = "rgba(0,0,0,.6)";
            document.getElementById("yelloWins").style["display"] = "initial";

        }
        else if(player_red>player_yellow){
            document.getElementById("resultado").style["background-color"] = "rgba(0,0,0,.6)";
            document.getElementById("redWins").style["display"] = "initial";
        }
        if(player_red==player_yellow){
            document.getElementById("resultado").style["background-color"] = "rgba(0,0,0,.6)";
            document.getElementById("empate").style["display"] = "initial";
        }
      
    window.clearInterval(verifica);
    }
},1000);
