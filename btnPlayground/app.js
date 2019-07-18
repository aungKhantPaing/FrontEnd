/* 
    JS - NaN
    Python - TypeError
    
*/



//Request from User ( Age )
var input = prompt("This is prompt(). Type your name...");
document.write("Hello, "+input);
document.write("<hr>");



//Calculator
// var first_number = prompt("Type Your First Number");
// var second_number = prompt("Type Your First Number");

// document.write(parseInt(first_number) + parseInt(second_number));



//FizzBuzz
// var x = 1;
// while (x<101) {
//     if (x%3 == 0) {
//         document.write("Fizz");
//     }
    
//     if (x%5 == 0) {
//         document.write("Buzz");
//     }
//     else {
//         document.write("<p>"+ x +"</p>");
//     }

//     x++
// }



//While Loop
// var star = "*";

// while(star.length <= 5) {
//     document.writeln("<p>"+star+"</p>");
//     star += "*";
// }



// HMA's
// var i = 1;
// var j = 1;

// while(i <= 5) {
//     while (j <= i) {
//         document.write("*");
//         j++;
//     }
    
//     document.write("<hr>");
//     j = 1;
//     i++;
// }



//For Loop
// for (var x=1; x<=100; x++){
//     document.writeln(x);
// }



//Function
// function hello(time){
//     for(var x = 0; x < time; x++){
//         document.writeln("Hello");
//     }
// }

// function series(start, end){
//     for(var x = start; x <= end; x++){
//         document.writeln(x);
//     }
// }

// function add(x, y){
//     document.write(x+y);
// }

// hello(3);
// document.write("<hr>");
// series(1,20);
// document.write("<hr>");
// add(2, 2);


var x = 10;

function test(){
    var x = 100;
    document.writeln("Function:"+x);
}
test();
document.writeln("Global:"+x);

document.write("<hr>");

function recursive(x, y){
    if(x <= y){
        document.write("Hello World<br>");
        x++;
        recursive(x, y);
    }
}

recursive(1, 10);

document.write("<hr>");

var hello = function() {
    document.write("Hello World");
}