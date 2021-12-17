var randomNumber1 = Math.round(Math.random()*5)+1;
var imageLeft= "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",imageLeft);
var randomNumber2 = Math.round(Math.random()*5)+1;
var imageRight= "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",imageRight);


if(randomNumber1>randomNumber2){
  document.querySelector("h2").textContent="Player1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h2").textContent="Player2 wins!";
}
else{
  document.querySelector("h2").textContent="Draw!";
}
