// Chapter 1

alert("Welcome.");
alert ("Error! Please enter a valid password.");
alert("Welcome to JS Land...\n Happy Coding");
alert("Welcome to JS Land...");
alert("Happy Coding!\n ⬜ Prevent this page from creating additional dialogs. ");

// Chapter 2
var Username= "Abdul Haseeb";
var myName= " Arbani";
var Fullname= "My name is " + Username + myName;
alert(Fullname);

var message= "HELLO WORLD";
alert(message);
var Name= "John Deo";
var Age= "15 Years Old";
var course= "Certified Mobile Application Development";
alert(Name);
alert(Age);
alert(course);

var name= "PIZZA";
var msg ="";
for (var i = name.length; i >=1; i--){
    msg += name.slice(0, i) + "\n"
}
alert(msg);

var name= "My Email Address is: ";
var id = "arbaniabdulhaseeb@gmail.com";
var Email = name.concat(id);
alert(Email);

var sentence = "I am trying to learn from the Book ";
var Book= "A smarter way to learn JavaScript";
var  x= sentence + Book;
alert(x);

document.write('Yah! I can write HTML content through JavaScript');

var y = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(y);

// Chapter 3

var age= " 15 ";
var x = "I am"+ age + "years old";
alert (x);

var N = " 14 ";
var x = "You have visited this site" + N + "times";
alert(x);

var Birthyear = "1990";
document.write('My Birth year'+ Birthyear + '</br>'+ 'Data type of my declared variable is number');

document.write('</br>'+'</br>');

document.write('<br>');

var visitor ="John Doe ";
var item=" T-Shirt";
var quantity=" 5 ";
document.write(visitor + 'ordered' + quantity + item +'(s) on XYZ Clothing Store');

// Chapter 4

var a = "Abdul";
var b = "Haseeb";
var c = "Arbani";

//legal
var d = "Abdul";
var e = "_Haseeb";
var f = "$Arbani";
var g = "_12345";
var h = "has_was";

// Illegal
var i ="var";
var j ="1234";
var k ="%for";
var l ="name&city";
var m ="name-address";


document.write('</br>'+'</br>');

var num =" numbers";
var $ =" $";
var _ =" _";
var letter ="letter"
var name ="name";
var sense ="sensitive";
var key ="Keywords";

document.write('<h3> Rules for naming JS variables </h3>');
document.write('<br>');
document.write('Variables name can only contain' + num +','+ $ +' and'+_ +'. For Example:' + $ + 'my'+_ +'1st Variable')
document.write('<br>');
document.write('Variables must begin with a' + letter +','+ $ +' or'+_ +'. For Example:'+ $+name +_+name +' or '+ name)
document.write('<br>');
document.write('Variable names are case '+ sense);
document.write('<br>');
document.write('Variable should not be JS '+ key);

// // Chapter 5

document.write('<br>'+'<br>');

var x= 4;
var y= 2;
var z= x + y;
var s= x-y;
var m= x*y;
var d= x/y;
document.write('Sum of '+ x +' and '+ y +' is '+ z);
document.write('<br>');
document.write('subtract of '+ x +' and '+ y +' is '+ s);
document.write('<br>');
document.write('multiply of '+ x +' and '+ y +' is '+ m);
document.write('<br>');
document.write('division of '+ x +' and '+ y +' is '+ d);

var x= 5;
document.write('<br>');
document.write('Value after variable declartion is undefined');
document.write('<br>');
document.write('Initial Value:'+ x);
var y= ++x;
document.write('<br>');
document.write('Value after increment:'+ y);
var z = x+7;
document.write('<br>');
document.write('Value after Addition is:'+ z);
var d= --z
document.write('<br>');
document.write('Value after decrement is:'+ d);
var r= z%3;document.write('<br>');
document.write('The reminder is :' + r);

document.write('<br>');

var price= 600;
var total= 5;
document.write('Total cost to buy tickets to a movie is ' + price*total + 'PKR');

document.write('<br>');
var t= 5;
document.write('Table of 5');
document.write('<br>');
document.write(t+'*1' +'= '+ t*1);
document.write('<br>');
document.write(t+'*2' +'= '+ t*2);
document.write('<br>');
document.write(t+'*3' +'= '+ t*3);
document.write('<br>');
document.write(t+'*4' +'= '+ t*4);
document.write('<br>');
document.write(t+'*5' +'= '+ t*5);
document.write('<br>');
document.write(t+'*6' +'= '+ t*6);
document.write('<br>');
document.write(t+'*7' +'= '+ t*7);
document.write('<br>');
document.write(t+'*8' +'= '+ t*8);
document.write('<br>');
document.write(t+'*9' +'= '+ t*9);
document.write('<br>');
document.write(t+'*10' +'= '+ t*10);

document.write('<br>');
var c=25;
document.write(c+'°C is '+( (c*9/5)+32) +'° F')
document.write('<br>');
var f=70;
document.write(f+'°F is '+( (f-32)*5/9) +'° C')

document.write('<br>');
var item1= 650;
var item2= 100;
var q1=3;
var q2=7;
var ship=100;

document.write('<h3>Shopping Cart</h3>')
document.write('<br>');
document.write('Price of item 1 is '+ item1);
document.write('<br>');
document.write('Quantity of item 1 is '+ q1);
document.write('<br>');
document.write('Price of item 2 is '+ item2);
document.write('<br>');
document.write('Quantity of item 2 is '+ q2);
document.write('<br>');
document.write('Shipping charges '+ ship);
document.write('<br>');
document.write('Total cost of your order is '+ ((item1*q1)+(item2*q2)+ship));

document.write('<br>');

var obt= 804;
var Total= 980; 

document.write('<h1>Marks Sheets</h1>')

document.write('Total marks: '+ Total)
document.write('<br>');
document.write('Marks obtained: '+ obt)
document.write('<br>');
document.write('Percentage: '+ obt/Total* 100);

document.write('<br>');

var $=10;
var Riyal= 25;
var Total= ($*104.80)+(Riyal*28)

document.write('<h1>Currency in PKR</h1>')
document.write('Total Currency in PKR: '+ Total)

document.write('<br>');
var x=5;
document.write(((x+5)*10/2))

document.write('<br>');
var year=2020;
var birth= 1993;

document.write('<h1>Age Calculator</h1>');
document.write('<br>');
document.write('Current Year:' + year);
document.write('<br>');
document.write('Birth Year:' + birth);
document.write('<br>');
document.write('Your Age: '+ (year - birth));

document.write('<br>'); 

var r= 20;
var p= 3.142;

document.write('<h1>The Geometrizer</h1>');
document.write('<br>');
document.write('Radius of a circle:' + r);
document.write('<br>');
document.write('The circumference is: ' + 2*p*r );
document.write('<br>');
document.write('The area is: '+ p*r**2);

document.write('<br>');

var s= "chocolate Chip";
var age=15;
var max= 65;
var est= 3 ;

document.write('<h1> The lifetime Supply Calculator</h1>');
document.write('<br>');
document.write('Favorite Snack:' + s);
document.write('<br>');
document.write('Current Age: ' + age );
document.write('<br>');
document.write('Estimated Maximum Age: '+ max);
document.write('<br>');
document.write('Amount of Snacks per day: '+ est);
document.write('<br>');
document.write('You will need '+ (max-age)*est + s + ' to last you until the ripe old age of '+ max);