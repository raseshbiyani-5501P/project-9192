player1name = localStorage.getItem("player1_name_for_maths_quiz");
player2name = localStorage.getItem("player2_name_for_maths_quiz");

player1score = 0;
player2score = 0;

document.getElementById("p1_name").innerHTML = player1name + " : ";
document.getElementById("p2_name").innerHTML = player2name + " : ";

document.getElementById("p1_score").innerHTML = player1score;
document.getElementById("p2_score").innerHTML = player2score;

document.getElementById("qturn").innerHTML = " Question Turn - " + player1name ;
document.getElementById("aturn").innerHTML = " Answer Turn - " + player2name;

function send(){

number1 = document.getElementById("num_1").value;
number2 = document.getElementById("num_2").value;
actual_answer = parseInt(number1) * parseInt (number2);

question_number = "<h4>" + number1 + "X" + number2 + "</h4>";

input_box = "<br> Answer : <input type ='text' id='input_check_box'>";

check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("num_1").value = "";
document.getElementById("num_2").value = "";

}

Q_turn = "1";
A_turn = "2";

function check(){

ga = document.getElementById("input_check_box").value;

if(ga == actual_answer){

if(A_turn =="1"){   

player1score = player1score + 1;
document.getElementById("p1_score").innerHTML= player1score;

}
else{

player2score = player2score + 1;
document.getElementById("p2_score").innerHTML = player2score;

}

}

if(Q_turn=="1"){

Q_turn = "2";
document.getElementById("qturn").innerHTML= "Question turn - " + player2name;

}

else{

Q_turn = "1";
document.getElementById("qturn").innerHTML = "Question turn - " + player2name; 
}

if(A_turn == "1")
{

A_turn = "2"
document.getElementById("aturn").innerHTML= "Answer turn -  " + player2name;

}
else{

    A_turn = "1";
    document.getElementById("aturn").innerHTML= "Answer turn - " + player1name;

}

document.getElementById("output").innerHTML = "";

}