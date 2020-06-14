

var userName ="levan";
var userSurname ="dolidze";
console.log(userName+" "+userSurname);

var number =50;
var sum=number+20;
console.log(sum);

var number =20;
number+=10;
console.log(number);

var age =3;
var age1 =50;
var sum=age+age1;
console.log(sum);

var car=25;
var car1=15;
var sum=car-car1;
console.log(sum);

var quantity =2.5;
var quantity1=5;
var sum=quantity*quantity1;
console.log(sum);

var people =10;
var people1=5;
var sum =people/people1;
console.log(sum);


var male="true";
var female="false";



if(female){
    alert("false");
}
else{
    alert("true");
}


var country =["georgia","italia","japan","UK"];
var numbers =[1,2,3,4,5,6];

console.log("country", country);
console.log( "numbers", numbers);


var client ={userName,userSurname};
console.log(client.userName);


var option = [
    {
    id:0,
    firstname:"levan",
    lastname:"dolidze",
},
{
    id:1,
    firstname:"levan1",
    lastname:"dolidze1",
}


]

console.log(option);

var car ;
car='porsche';

var pass="111"


var name = prompt("შენი სახელი?");
var surname =prompt("შენი გვარი?");
var test =prompt("თუ არ ხარ რობოტი შეიყვანე 5+5 ის ჯამი")

console.log("გამარჯობა",name,surname,"",test);

if(test==10){
    alert("true")
}
else
alert("სოფია დაგინახე")


var name = prompt("შენი სახელი?");
var surname =prompt("შენი გვარი?");
var age =prompt("ასაკი?")

document.getElementById("welcome").innerHTML="გამარჯობა "+ name +" "+ surname;