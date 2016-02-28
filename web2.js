var Team = JSON.parse(window.localStorage.getItem("data"));

console.log(Team);

setTimeout(setNames, 50);
function setNames() {
    $('#n1').text(Team[0].name);
    $('#n2').text(Team[1].name);
    $('#n3').text(Team[2].name);
    $('#n4').text(Team[3].name);
}

var RandomPlayer;
var RandomNumber;

//randomize an index number from range of 0 to (number of players - 1),
// retrieve player from Team,
// use console to print out the generated player
function GeneratePlayer() {
    RandomNumber = Math.floor(Math.random() * (Team.length));
    RandomPlayer = Team[RandomNumber];
    console.log(RandomNumber);
    //console.log(Team);
    //console.log(RandomPlayer);
    return RandomPlayer.name;
    //document.write(RandomPlayer.name);  //WRITE THIS in some HTML component
}


function drink() {
    //setNames();
    //$('#n1').text(Team[0].name);
    //$('#n2').text(Team[1].name);
    //$('#n3').text(Team[2].name);
    //$('#n4').text(Team[3].name);
    $('#drinker').text(GeneratePlayer());
    playerHasDrank();
}

function playerHasDrank(){

    RandomPlayer.drinksHad ++;
    RandomPlayer.BAC = (((14 * (RandomPlayer.drinksHad)) / ((RandomPlayer.weight) * (RandomPlayer.r))) / 0.31) * 10000 ;
    //RandomPlayer.BAC = ((14 * (RandomPlayer.drinksHad)) / ((RandomPlayer.weight) * (RandomPlayer.r)))  * 100 ;
    //  alert("Player:" + RandomPlayer.name + "Please drink" + Alcohol.standardDrink + "oz of" + Alcohol.name );
    //return RandomPlayer.name + ":" + RandomPlayer.BAC + "%";

    //var number = RandomPlayer.BAC * 100;
    if (RandomNumber == 0) {
        $('#p1').text(Math.round(RandomPlayer.BAC * 10) / 10 + "%");
        //console.log(RandomPlayer.BAC);
    }
    else if (RandomNumber == 1) {
        $('#p2').text(Math.round(RandomPlayer.BAC * 10) / 10 + "%");
        //console.log(RandomPlayer.BAC);
    }
    else if (RandomNumber == 2) {
        $('#p3').text(Math.round(RandomPlayer.BAC * 10) / 10 + "%");
        //console.log(RandomPlayer.BAC);
    }
    else {
        $('#p4').text(Math.round(RandomPlayer.BAC * 10) / 10 + "%");
        //console.log(RandomPlayer.BAC);
    }

}


function UpdateBAC() {
    console.log("Updating");
    for (i=0; i < Team.length ; i++) {
        if (Team[i].BAC >= ((((5 / 60) / 60) * 0.015) * 100)) {
            Team[i].BAC -= ((((5 / 60) / 60) * 0.015) * 100);

            if (i == 0) {
                $('#p1').text(Math.round(Team[i].BAC * 10) / 10 + "%");
                //console.log(RandomPlayer.BAC);
            }
            else if (i == 1) {
                $('#p2').text(Math.round(Team[i].BAC * 10) / 10 + "%");
                //console.log(RandomPlayer.BAC);
            }
            else if (i == 2) {
                $('#p3').text(Math.round(Team[i].BAC * 10) / 10 + "%");
                //console.log(RandomPlayer.BAC);
            }
            else {
                $('#p4').text(Math.round(Team[i].BAC * 10) / 10 + "%");
                //console.log(RandomPlayer.BAC);
            }
        }
        //console.log(Team[i].name + Team[i].BAC);
    }
}


setInterval(UpdateBAC,5000);