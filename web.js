function check(){
var score = 0;

var right_answer_1 = document.getElementById('q1-a1');
var q1_anwser_2 = document.getElementById('q1-a2');
var q1_anwser_2 = document.getElementById('q1-a3');
var q1_anwser_2 = document.getElementById('q1-a4');
if (right_answer_1.checked == true) {
    alert("Question 1 is Correct")
}
else {
    alert('Question 1 is wronge')
}



var right_answer_2 = document.getElementById('q2-a2');
var q2answer_2 = document.getElementById('q2-a1');
var q2answer_2 = document.getElementById('q2-a3');
var q2answer_2 = document.getElementById('q2-a4');

score++ 
if(right_answer_2.checked == true) {
    alert("Question 2 is Correct")
}
else{
    alert("Question 2 is wronge")
}

var right_answer_3 = document.getElementById('q3-a1');
var q1_anwser_3 = document.getElementById('q3-a2');
var q1_anwser_3 = document.getElementById('q3-a3');
var q1_anwser_3 = document.getElementById('q3-a4');

if (right_answer_3.checked == true){
    alert("Question 3 is Correct")

}
else{
    alert("Question 3 is wronge")
}

var right_answer_4 = document.getElementById('q4-a3');
var q1_anwser_4 = document.getElementById('q4-a1');
var q1_anwser_4 = document.getElementById('q4-a2');
var q1_anwser_4 = document.getElementById('q4-a4');

if(right_answer_4.checked == true){
    alert("Question 4 is Correct");
}
else{
    alert("Question 4 is wronge")
}


var  right_answer_5 = document.getElementById('q5-a3');
var q1_anwser_5 = document.getElementById('q5-a1');
var q1_anwser_5 = document.getElementById('q5-a2');
var q1_anwser_5 = document.getElementById('q5-a4');
if(right_answer_5.checked == true){
    alert("Question 5 is Correct")
}
else{
    alert("Question 5 is wronge")
}

var right_answer_6 = document.getElementById('q6-a1');
var q1_anwser_6 = document.getElementById('q6-a2');
var q1_anwser_6 = document.getElementById('q6-a3');
var q1_anwser_6 = document.getElementById('q6-a4');
if(right_answer_6.checked == true){
    alert("Question 6 is Correct")
}
else{
    alert("Question 6 is wronge")
}

alert("Your score is" + score++ + '/6')
}













