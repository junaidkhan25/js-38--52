///////////////////CHAPTER 38 -------42


console.log("hello")
///////question1///////
function power(a,b){
        document.write(Math.pow(a,b))
    }
    power(5,2)


///////question3////////////
var s1 = 2;
var s2 = 3;
var s3 = 4;
var s = (s1 + s2 + s3) / 2;
var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
console.log(area);
//////////QUESTION NO 05 (_//


var a = "The quick brown fox jumps over the lazy dog"
var b = a.indexOf("w")

document.write(b)
//////////////QUESTION NO 08 (Distance)_________//


//var distance = +prompt("Write the distence B/W two cities", "in KM")

var b = distance * 1000; //for KM to meter
var c = distance * 3280.84; // for km to feets
var d = distance * 39370.1 //for KM to inches
var e = distance * 100000 //for Km to centimeter
document.write(distance + " KM convert into meter is = " + b + "<br>" +
    distance + " KM convert into feet is = " + c + "<br>" +
    distance + " KM convert into inches is = " + d + "<br>" +
    distance + " KM convert into centimeter is = " + e + "<br>")

////////////////////////////////////////////video assignment\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//changing text and background color

function foo(){
    let container = document.getElementById("heading");
    let bgc = prompt("enter background color");
    container.style.backgroundColor = bgc;
}

function textColors(){
  let heading = document.getElementById("heading1");
  let para = document.getElementById("para");
  let textColor = prompt("Enter TEXT Color");
  heading.style.color = textColor;
  para.style.color = textColor;
}
//change size img and display
function img(e){
  let img = document.getElementById("img");
    if (e == "show") {
      img.style.display = "block";
    } else if (e == "hide") {
      img.style.display = "none";
    } else if (e == "small") {
      img.style.width = "400px";

    } else if (e == "big") {
      img.style.width = "1000px";
    } else {
      return;
    }
  
}
//  100W bulb on / off>
function bulb() {
   let bulb = document.getElementById("bulb")
      bulb.src = "bulbon.png";
}

function off(){
  let bulb = document.getElementById("bulb")
bulb.src = "bulboff.png"
}
function paras(){
  let d = document.getElementById('container');
  let clr = prompt("enter text color")
  let para = d.getElementsByTagName('p');
  for (var i = 0; i < para.length; i++) {
  para[i].style.color = clr;
}
}

//////////////////////////////////////CHAPTER 43 -------48
function clickme() {

    alert("Hello")
}

function iphoneImages() {

    alert("Thanks for purchasing a phone from us")
}
function dlt() {

    var get = document.getElementById("tr1");
    var em = get.innerHTML = ""

}
function dlt2() {

    var get = document.getElementById("tr2");
    var em = get.innerHTML = ""

}
function dlt3() {

    var get = document.getElementById("tr3");
    var em = get.innerHTML = ""

}
function dlt4() {

    var get = document.getElementById("tr4");
    var em = get.innerHTML = ""

}

function changeImage() {

    var get = document.getElementById("img1")
    get.src = "mqdefault.jpg"
}

function reverseImage() {

    var get = document.getElementById("img1")
    get.src = "ninja-h2r-front.jpg"
}

function counter() {

    var get = document.getElementById("myinput").value
    get++
    document.getElementById("myinput").value = get
}


///////////////////CHAPTER 49 -------52
function dec() {

    var get = document.getElementById("myinput").value;
    get--
    if (get <= 0) {
        get = 0
    }
    else {

        document.getElementById("myinput").value = get
    }
}



function see() {

    var str = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia reiciendis eius delectus, quae incidunt natus recusandae ratione fuga ullam nihil nam at? Aspernatur, accusamus quisquam soluta aliquid doloremque quam .";

    var get = document.getElementById("det");
    get.innerHTML += str
    var link = document.getElementById("a1")
    link.style.display = "none"

}

function data() {

    var get = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    alert("Your email is " + get + '\n' + " Your Passord is " + pass);
 

}

