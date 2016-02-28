var name;
var weight;
var gender;

function Gender(boolean) {
    if (boolean)
        gender = "male";
    else gender = "female";
}

function Load() {

    name = document.getElementById("n").value;
    weight = document.getElementById("w").value;

    if (!(name == "" || weight == "" || gender == null || isNaN(weight))) {
        AddPlayer();
    }
}

function Player(name, weight, gender) {
    this.name = name;
    this.weight = weight * 453.592;
    this.gender = gender; //true for female, false for male
    if (gender) { this.r = 0.55}
    else {this.r = 0.68}
    this.BAC = 0;
    this.drinksHad = 0;

}

var Team = [];
var player;

function AddPlayer() {
    player = new Player(this.name, this.weight, this.gender);
    if (gender) {
        r = 0.55
    }
    else {
        r = 0.68
    }
    Team.push(player);
    console.log(Team);
    display();
}

var count = 0;
function display() {
    count++;
    switch (count) {
        case 1:
            $('#teamlist').text(player.name);
            break;
        case 2:
            $('#teamlist2').text(player.name);
            break;
        case 3:
            $('#teamlist3').text(player.name);
            break;
        case 4:
            $('#teamlist4').text(player.name);
            break;
    }
    clear();
    //console.log(player.name);
}

function clear() {
    $('input').each(function () {
        $(this).val("");
        x=1;
    });
    $('input').first().focus();
    //console.log("clearing");
}

function startGame() {
    if (count >= 2) {
        //console.log(Team);
        saveData();
        location.href="web3.html";
    }
}

var RandomPlayer;

//randomize an index number from range of 0 to (number of players - 1),
// retrieve player from Team,
// use console to print out the generated player
function GeneratePlayer() {
    var RandomNumber = Math.floor(Math.random() * (Team.length));
    RandomPlayer = Team[RandomNumber];
    return RandomPlayer.name;
    //document.write(RandomPlayer.name);  //WRITE THIS in some HTML component
}

//
function playerHasDrank(){
    GeneratePlayer();
    RandomPlayer.drinksHad ++;
    RandomPlayer.BAC = ((14 * (RandomPlayer.drinksHad)) / ((RandomPlayer.weight) * (RandomPlayer.r))) * 100 ;
    //alert("Player:" + "Please drink" + Alcohol.standardDrink + "oz of" + Alcohol.name );
    return RandomPlayer.name + ":" + RandomPlayer.BAC;
}

function drink() {
    $('#drinker').text(GeneratePlayer());
}


function saveData() {
    window.localStorage.setItem("data", JSON.stringify(Team));

}

