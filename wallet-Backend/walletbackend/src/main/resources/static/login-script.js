var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")
var l = document.getElementById("log")
var r = document.getElementById("reg")

function register(){
    x.style.left="-400px";
    y.style.left="10px";
    z.style.left="110px";
    l.style.color="black";
    r.style.color="white";
}

function login(){
    x.style.left="0px";
    y.style.left="430px";
    z.style.left="0px";
    l.style.color="white";
    r.style.color="black";
  }