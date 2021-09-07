
function my_name(){
    alert("Remon Reda");
}
document.getElementById("112").innerHTML="Remon Reda Morgan"
function myjscript(){
    document.getElementById("java").innerHTML="Hello"
}
function even_odd(){
    var n = prompt("Please Enter A Number")
    if (n==0) {
        document.write("Error")
      }
    else if(n%2==0){
        document.write("The number is even")
    }
    else{
        document.write("The number is odd")
    }
}
function sum(){
    var n1 = parseInt(prompt("Enter the first number you want to sum up"));
    var n2 = parseInt(prompt("Enter the second number you want to sum up"));
    document.getElementById("sum").innerHTML="The Sum Is"+" " +(n1+n2)
}

function my_hi(){
alert("Welcome to my site");
var x = prompt("Enter Your name");
alert("Welcome " + x);
}