// // Chapter 1 task 1
// // Greet visitor
// alert("Welcome.");
// // Chapter 1 task 2
// // Display following message
// alert ("Error! Please enter a valid password.");
// // Chapter 1 task 3
// // Display following message
// alert("Welcome to JS Land...\n Happy Coding");
// // Chapter 1 task 4
// // Display following messages in sequence
// alert("Welcome to JS Land...");
// alert("Happy Coding!\n ⬜ Prevent this page from creating additional dialogs. ");
// // Console 
// console.log("Hello... I can run JS through my web browser's console");
// // Chapter 1 task 6 & 7
//   // Done in Index file


// // Chapter 2 task 1
// // Enter Full Name:

// var Username= prompt("Enter Your Name");
// var myName= prompt(" Enter Your Surname");
// var Fullname= 'My Name is ' + Username +' '+ myName;
// alert(Fullname);
// // Chapter 2 task 2
// // Display Message
// var message= "HELLO WORLD"; 
// alert(message);

// // Chapter 2 task 3
// // Student Bio Data
// var Name= "John Deo";
// var Age= "15 Years Old";
// var course= "Certified Mobile Application Development";
// alert(Name);
// alert(Age);
// alert(course);

// // Chapter 2 task 4
// // Write Pizza
// var name= "PIZZA";
// var msg ="";
// for (var i = name.length; i >=1; i--){
//     msg += name.slice(0, i) + "\n"
// }
// alert(msg);

// // Chapter 2 task 5
// // Enter Email address 

// var name= "My Email Address is: ";
// var id = "arbaniabdulhaseeb@gmail.com";
// var Email = name.concat(id);
// alert(Email);

// // Chapter 2 task 6
// // Book Name
// var sentence = "I am trying to learn from the Book ";
// var Book= "A smarter way to learn JavaScript";
// var  x= sentence + Book;
// alert(x);

// // Chapter 2 task 7
// // Displaying in Browser

// document.write('Yah! I can write HTML content through JavaScript');

// // Chapter 2 task 8
// // symbol alert
// var y = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(y);

// // Chapter 3 task 1 
// // Enter age
// var age= prompt(" Enter Your Age ");
// var x = "I am "+ age + " years old";
// alert (x);

// // Chapter 3 task 2
// // Number of Visiting 
// var N = " 14 ";
// var x = "You have visited this site" + N + "times";
// alert(x);
// // Enter your birth year
// var Birthyear = prompt("Enter Your Birth Year");
// document.write('My Birth year'+ Birthyear + '</br>'+ 'Data type of my declared variable is number');

// document.write('</br>'+'</br>');

// // Chapter 3 task 3
// // Visitor Information
// var visitor =prompt("Enter Name");
// var item=prompt("Item Name");
// var quantity=prompt("Quantity");
// document.write(visitor + 'ordered' + quantity + item +'(s) on XYZ Clothing Store');

// // Chapter 4 task 1
// // assigning 3 variables in one statement
// var a=23,b=3,c=4;

// // Chapter 4 task 2
// //legal Variables
// var d = "Abdul";
// var e = "_Haseeb";
// var f = "$Arbani";
// var g = "_12345";
// var h = "has_was";

// // Illegal Variables
// var i ="var";
// var j ="1234";
// var k ="%for";
// var l ="name&city";
// var m ="name-address";


// document.write('</br>'+'</br>');
// // Chapter 4 task 3
// //Rules of Naming JS Variables

// var num =" numbers";
// var $ =" $";
// var _ =" _";
// var letter ="letter"
// var name ="name";
// var sense ="sensitive";
// var key ="Keywords";

// document.write('<h3> Rules for naming JS variables </h3>');
// document.write('<br>');
// document.write('Variables name can only contain' + num +','+ $ +' and'+_ +'. For Example:' + $ + 'my'+_ +'1st Variable')
// document.write('<br>');
// document.write('Variables must begin with a' + letter +','+ $ +' or'+_ +'. For Example:'+ $+name +_+name +' or '+ name)
// document.write('<br>');
// document.write('Variable names are case '+ sense);
// document.write('<br>');
// document.write('Variable should not be JS '+ key);

// //  Chapter 5 task 1
// //  DMAS
// document.write('<br>'+'<br>');

// var x= 4,y=2 ;
// var z= x + y;
// var s= x-y;
// var m= x*y;
// var d= x/y;
// document.write('Sum of '+ x +' and '+ y +' is '+ z);
// document.write('<br>');
// document.write('subtract of '+ x +' and '+ y +' is '+ s);
// document.write('<br>');
// document.write('multiply of '+ x +' and '+ y +' is '+ m);
// document.write('<br>');
// document.write('division of '+ x +' and '+ y +' is '+ d);

// document.write('<br>'+'<br>');
// //  Chapter 5 task 2
// // Increment decrement & reminder
// var n="";
// var x=5;
// document.write('<br>');
// document.write('Value after variable declartion is' + n );
// document.write('<br>');
// document.write('Initial Value:'+ x);
// var y= ++x;
// document.write('<br>');
// document.write('Value after increment:'+ y);
// var z = x+7;
// document.write('<br>');
// document.write('Value after Addition is:'+ z);
// var d= --z
// document.write('<br>');
// document.write('Value after decrement is:'+ d);
// var r= z%3;document.write('<br>');
// document.write('The reminder is :' + r);

// document.write('<br>'+'<br>');
// //  Chapter 5 task 3
// // Total Price
// var price= prompt("Price");
// var total= prompt("Quantity");
// document.write('Total cost to buy tickets to a movie is ' + price*total + 'PKR');

// document.write('<br>'+'<br>');
// //  Chapter 5 task 4
// // Table 

// var t=prompt("Which number");
// for ( var i=1 ; i<=10 ; i++){
//   document.write(t + 'x'+ i+ '='+ t*i + '<br>')
// }


// document.write('<br>'+'<br>');
// //  Chapter 5 task 5
// // Centigrade and Farenhite
// var c=25;
// document.write(c+'°C is '+( (c*9/5)+32) +'° F')
// document.write('<br>');
// var f=70;
// document.write(f+'°F is '+( (f-32)*5/9) +'° C')

// document.write('<br>'+'<br>');
// //  Chapter 5 task 6
// // Shopping Cart
// var item1= prompt("Item 1 Price");
// var item2= prompt("Item 2 Price");
// var q1=prompt("Item 1 Quantity");
// var q2=prompt("Item 2 Quantity");
// var ship=prompt("Shipping Charges");

// document.write('<h3>Shopping Cart</h3>')
// document.write('<br>');
// document.write('Price of item 1 is '+ item1);
// document.write('<br>');
// document.write('Quantity of item 1 is '+ q1);
// document.write('<br>');
// document.write('Price of item 2 is '+ item2);
// document.write('<br>');
// document.write('Quantity of item 2 is '+ q2);
// document.write('<br>');
// document.write('Shipping charges '+ ship);
// document.write('<br>');
// document.write('Total cost of your order is '+ ((item1*q1)+(item2*q2)+ship));

// document.write('<br>'+'<br>');
// //  Chapter 5 task 6
// // Marks Sheet
// var obt= prompt("Marks Obtained");
// var Total= prompt("Total Marks"); 

// document.write('<h1>Marks Sheet</h1>')

// document.write('Total marks: '+ Total)
// document.write('<br>');
// document.write('Marks obtained: '+ obt)
// document.write('<br>');
// document.write('Percentage: '+ obt/Total* 100);

// document.write('<br>'+'<br>');
// //  Chapter 5 task 7
// // Conversion of $ and Riyal
// var $=prompt("How much $ you have");
// var Riyal= prompt("How much riyal you have");
// var Total= ($*104.80)+(Riyal*28)

// document.write('<h1>Currency in PKR</h1>')
// document.write('Total Currency in PKR: '+ Total)

// document.write('<br>'+'<br>');
// //  Chapter 5 task 8
// // Arithmetic

// var x=5;
// document.write(((x+5)*10/2))

// document.write('<br>'+'<br>');
// //  Chapter 5 task 9
// // Age Calculator
// var year= prompt("Enter Current Year");
// var birth= prompt("Enter Your Birth Year");

// document.write('<h1>Age Calculator</h1>');
// document.write('<br>');
// document.write('Current Year:' + year);
// document.write('<br>');
// document.write('Birth Year:' + birth);
// document.write('<br>');
// document.write('Your Age: '+ (year - birth) + 'or '+ (--year - birth ) );

// document.write('<br>'+'<br>');
// //  Chapter 5 task 10
// // Gemetrizer
// var r= 20;
// var p= 3.142;

// document.write('<h1>The Geometrizer</h1>');
// document.write('<br>');
// document.write('Radius of a circle:' + r);
// document.write('<br>');
// document.write('The circumference is: ' + 2*p*r );
// document.write('<br>');
// document.write('The area is: '+ p*r**2);

// document.write('<br>'+'<br>');
// //  Chapter 5 task 11
// // Lifetime Supply
// var s= prompt("Favorite Snack ");
// var age= prompt("Age ");
// var max= prompt("Max Age ");
// var est= prompt("Estimated amount ") ;

// document.write('<h1> The lifetime Supply Calculator</h1>');
// document.write('<br>');
// document.write('Favorite Snack:' + s);
// document.write('<br>');
// document.write('Current Age: ' + age );
// document.write('<br>');
// document.write('Estimated Maximum Age: '+ max);
// document.write('<br>');
// document.write('Amount of Snacks per day: '+ est);
// document.write('<br>');
// document.write('You will need '+ (max-age)*est +' ' + s  + ' to last you until the ripe old age of '+ max);

// Chapater 6-9 task 1

// Arithemetic display
// var a=10
// document.write('<br>'+'<br>');
// document.write('Result');
// document.write('<br>');
// document.write('The Value of a is'+ a);
// document.write('<br>');
// document.write('..............');
// document.write('<br>');
// document.write('The value of ++a is '+ ++a);
// document.write('<br>');
// document.write('Now the Value of a is '+ a);
// document.write('<br>');
// document.write('The value of a++ is '+ a++);
// document.write('<br>');
// document.write('Now the Value of a is '+ a);
// document.write('<br>');
// document.write('The value of --a is '+ --a);
// document.write('<br>');
// document.write('Now the Value of a is '+ a);
// document.write('<br>');
// document.write('The value of a-- is '+ a--);
// document.write('<br>');
// document.write('Now the Value of a is '+ a);
// document.write('<br>');

// Chapater 6-9 task 2
// Value of a and b,
// var a= 2;
// var b= 1;
// var c= --a;
// var d= --a - --b;
// var e= --a - --b + ++b;
// var result= --a - --b + ++b + b--;
// document.write('<br>');
// document.write('--a =' +c);
// document.write('<br>');
// document.write('--a - --b =' +d)
// document.write('<br>');
// document.write('--a - --b + ++b =' + e)
// document.write('<br>');
// document.write('value of a is '+ a)
// document.write('<br>');
// document.write('value of b is '+ b)
// document.write('<br>');
// document.write('The Result is '+ result);

// Chapater 6-9 task 3
// Greet User

// var name= prompt("Enter Your Name" , "Your Name")
// alert("Welcome Mr."+ name + " to our Website")

// Chapater 6-9 task 4
// Multiplication Table

// var t= prompt("Enter Number");
// for ( var i=1 ; i<=10 ; i++){
//   if (t>0){
//     document.write(t + 'x'+ i+ '='+ t*i + '<br>')
//   }
//   else {var b=5;
//     document.write(b + 'x'+ i+ '='+ b*i + '<br>') }
// } 

// chapter-6-9 task-6
// Marks Sheet

// var total= 100;
// var sub1= prompt("Enter Subject 1");
// var m1= +prompt("Enter Subject 1 marks");
// var sub2= prompt("Enter Subject 2");
// var m2= +prompt("Enter Subject 2 marks");
// var sub3= prompt("Enter Subject 3");
// var m3= +prompt("Enter Subject 3 marks");
// var mt= m1+m2+m3;
// var pt= mt/(total*3) *100;
// document.write("Subject"," "," ", "Obtained", " "," ","Total"," "," ","Percentage");
// document.write('<br>','<br>');
// document.write(sub1 ,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp", m1 ,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp",total,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp", (m1/total*100));
// document.write('<br>');
// document.write(sub2 ,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp", m2 ,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp",total,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp", (m2/total*100));
// document.write('<br>');
// document.write(sub3 ,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp", m3 ,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp",total,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp", (m3/total*100));
// document.write('<br>');
// document.write("&nbsp ","&nbsp ","&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp", mt,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp",total*3,"&nbsp ","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp", pt);

// Chapter 9-11 Task 1
//  city Name

// var City= prompt("Enter City");
// if(City == "Karachi" ){
//  alert("Welcome to City of Lights")
// }
// else {
//   alert("Welcome to " + City)
// }

// Chapter 9-11 Task 2
// Gender 

// var gender = prompt("Enter Gender");
// if (gender == "Male"){
//   alert("Good Mornging Sir")
// }
// else{
//   alert("Good Morning Madam")
// }

// (Chapter 9-11 Task 3)
// Traffic Signal


// var color= prompt("Which color you are seeing");
// if(color == "Red"){
//     document.write('Signal Color' + '&nbsp'+ '&nbsp'+'Message')
//     document.write('<br>')
//     document.write( color + '&nbsp'+ '&nbsp'+ '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+ 'Must Stop')
// }
// else if(color == "Yellow"){
//   document.write('Signal Color' + '&nbsp'+ '&nbsp'+'Message')
//   document.write('<br>')
//   document.write( color + '&nbsp'+ '&nbsp'+ '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+ 'Ready to move')
// }
// else  if (color == "Green")
// {
//   document.write('Signal Color' + '&nbsp'+ '&nbsp'+'Message')
//   document.write('<br>')
//   document.write( color + '&nbsp'+ '&nbsp'+ '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+ 'Move now')
// }

// (Chapter 9-11 Task 4)
// Remaining Fuel

// var fuel = prompt("Enter Remaining fuel in litres");
// if (fuel < 0.25){
//   alert ("Pleae refill the fuel in your car")
// }
// else {
//   alert ("Fuel is OK")
// }

// (Chapter 9-11 Task 6)
// Percentage

// var m= prompt("Total marks obtained");
// var t= prompt("Enter Total marks");
// var p= m/t*100

// document.write('Marks Sheet')
// document.write('<br>')
// document.write('<br>')
// document.write('Total Marks: '+ t)
// document.write('<br>')
// document.write('Marks Obtained: ' + m)
// document.write('<br>')
// document.write('Percentage: '+ p)
// document.write('<br>')

// if(p >= 80){
//   document.write('Grade A-one')
//   document.write('<br>')
//   document.write('Remarks: Excellent');
// }
// else if(p >= 70){
//   document.write('Grade A')
//   document.write('<br>')
//   document.write('Remarks: Good');
// }
// else if(p >= 60){
//   document.write('Grade B')
//   document.write('<br>')
//   document.write('Remarks: You need to improve');
// }
// else if(p < 60){
//   document.write('Grade Fail')
//   document.write('<br>')
//   document.write('Remarks: Sorry');
// }

// Chapter 9-11 task 7
// Guess Game

// var n= 5;
// var g= +prompt("Guess the number ", "Range from 1-10");

// if (g == 5)
// {
//   alert("BINGO! Correct answer")
// }
// else if (g == --n)
// {
//   alert("Close enough to the correct answer")
// }
// else
// {
//   alert("Sorry Incorrect answer");
// }

// Chapter 9-11 task 8
// Divisble by 3

// var x= prompt("Enter the number")
// if (x % 3 == 0){
//   alert("The number is divisble by 3")
// }
// else {
//   alert("The number is not divisble by 3")
// }

// Chapter 9-11 task 9
// Even and Odd Number

// var x= prompt("Enter the number")
// if (x % 2 == 0){
//   alert("This is Even Number")
// }
// else if (x % 1 == 0){
//   alert("This is Odd Number")
// }

// Chapter 9-11 task 10
// Temperature

// var t = prompt("Enter temprature");

// if (t > 40) {
//   document.write(' It is  too hot outside');
// }
// else if (t > 30) {
//   document.write(' The Weather today is Normal');
// }
// else if (t > 20) {
//   document.write(' Todays Weather is Cool.');
// }
// else if (t > 10) {
//   document.write('OMG! Todays Weather is so Cool. ');
// }

// Chapter 9-11 task 11
// Calculator

// var x= +prompt("Enter first Value");
// var z= prompt("Enter Operator");
// var y= +prompt("Enter second Value");

// document.write(x+z+y+ '=')
// if (z === '+')
// {
//   document.write(x+y);
// }
// else if (z === '-')
// {
//   document.write(x-y);
// }
// else if (z === '*')
// {
//   document.write(x*y);
// }
// else if (z === '/')
// {
//   document.write(x/y);
// }
// else if (z === '%')
// {
//   document.write(x/y*100);
// }

// chapter 12-13 task 1
// ASCII

// var str = "AbDul 189";
// var n = str.charCodeAt(prompt("Enter Desired ASCII code", "From 0-8"));
// alert(n)

// chapter 12-13 task 2
// integer comparison

// x= prompt("Enter first number");
// y= prompt("Enter second number");

// if(x > y){
//   alert ("first value is greater then second")
// }
// if(x < y){
//   alert ("second value is greater then first")
// }
// if(x == y){
//   alert ("Both values are equal")
// }

// chapter 12-13 task 3
// state of number

// var x=prompt("Eneter value")
// if (x < 0){
//   alert ("The Value is Negative")
// }
// else 
// if (x > 0){
//   alert ("The Value is Positive")
// }
// else
//   if (x == 0){
//     alert ("The Value is Zero")
//  }

// chapter 12-13 task 4
// Vowel Check

// var w= prompt("Enter an alphabet", "only 1 alphabet")
// if (w ==  "a"||"e"||"i"||"o"||"u") {
//   alert ("True")
// }
// else {
//   alert ("False")
// }

// chatper 12-13 task 5
// Password check

// var p= "Return";
// var c= prompt("Enter password")
// if (c == ""){
//   alert("Please Enter Password")
// }
// else 
// if (c == p){
//       alert("Correct! The password you entered matches the original password")
//     }
// else 
// {
//    alert("Incorrect Password")
// }
 
// chapter 12-13 task 6
// correct if/else

// var hour = 13;
// if (hour < 18){
//   alert("greeting = Good Day");
// }
// else {
//   alert("greeting = Good Evening");
// }
// Chapter 14-16 task 1
// Empty array
// var a= []
// Chapter 14-16 task 2
// Future sto
// var a= []
// a[0]=prompt("Add Student Name")
// document.write(a)
// chapter 14-16 task 3
// string array
// var a= ["Abdul"];
// chapter 14-16 task 4
// Number array
// var a= [2];
// chapter 14-16 task 5
// Boolean array
// var a= Boolean(10>9)
// chapter 14-16 task 6
// Mixed array
// var a= [2,"Arbani",Boolean(10>9)];

// chapter 14-16 task 7
// display courses
// var education = ["SSC","HSC","BCS","BS","B.COM","MS","M.PHIL.","Phd"]
// for (var i= 0; i < education.length; i++){
//     document.write( i+')' + education[i] + '<br>')
// }

// Chapter 14-16 task 8
// Percentage

// var names =["Ali","Ahmed","Muzzammil"] 
// var marks =[450,480,380] 
// var total = 500;
// for(var i= 0; i < names.length ; i++) {
//     document.write("score of " + names[i] + " is " + marks[i] + ". Percentage: " + (marks / total) * 100 + '<br>')
// }

// Chapter 14-16 task 9
// Color 

// var color= ["Red","Green","Yellow","Black","White"]
// a) In start
// // var ask = prompt("What color you want to add to the begining")
// // color.unshift(ask)
// document.write(color)
// b)In End
// var ask = prompt("What color you want to add to the End")
// color.push(ask)
// document.write(color)
// c) adding 2 colors
// var ask = prompt("What 2 color's you want to add to the start ", "Write with ,")
// color.unshift(ask)
// document.write(color)
// d) Delting first from start
// color.shift(0)
// document.write(color)
// e) Deleting the last color
// color.pop(-1)
// document.write(color)
// f) at which index you want to add
// var ask1 = prompt("At which index you want to add color")
// var ask2 = prompt("which color")
// color.splice(ask1,0,ask2)
// document.write(color)
// g) from which index you want to delete
// var ask1 = prompt("How many colors you want to remove")
// var ask2 = prompt("at which index")
// color.splice(ask2,ask1,)
// document.write(color)

// Chapter 14-16 task 10
// Acending order

// var score = [480,120,320,230]
// document.write('Score: ' + score + '<br>')
// document.write('ordered score: '+ score.sort())

// Chapter 14-16 task 11
// Copy elements
// var cities = ["Karachi","Islamabad","Lahore","Quetta"]
// var copy = cities.slice(1,3) 
// document.write('Cities list'+ '<br>' + cities +'<br>')
// document.write('Selected Cities'+ '<br>' + copy)

// chapter 14-16 task 12
// join array
// var arr = ["This","is","my","Cat"];
// document.write('Array' + '<br>' + arr + '<br>')
// document.write('String' +'<br>'+ arr.join(" "))

// chapter 14-16 task 13
// FIFO

// var d = ["keyboard", "mouse","printer","monitor"]
// for (var i= 0 ; i < d.length; i++){
//     document.write('out: '+'<br>'+ d[i] + '<br>')
// }
// chapter 14-16 task 14
// Reverse

// var d = ["keyboard", "mouse","printer","monitor"]
// for (var i = d.length - 1; i >= 0; i--){
//     document.write('out: '+'<br>'+ d[i] + '<br>')
// }

// chapter 17-20 task 1
// multidimensional array
// matrix = new int[""][""];
// chapter 17-20 task 2
// matrix
// matrix = new int[4][3];
// chapter 17-20 task 3
// numeric counting

// for (var input = 1; input <= 10; input++){
//     document.write[input]
// }
// chapter 17-20 task 4
// Multiplication number
// var t= prompt("Enter Number for Multiplication")
// var h= prompt("How much times you want to multiply")
// for ( var i=1 ; i<=h ; i++){
//         document.write(t + 'x'+ i+ '='+ t*i + '<br>')
//       }
// chapter 17-20 task 5
// Multiplication number
// var fruits = ["Apple","Banana","Mango","Orange","Strawberry"]
// for (var i= 0 ; i < fruits.length; i++){
//     document.write[fruits]
// }
