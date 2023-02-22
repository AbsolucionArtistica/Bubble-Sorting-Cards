/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♥", "♠", "♣"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomSuit = suit[Math.floor(Math.random() * suit.length)]; //Elige una pinta al azar
  let randomNumber = number[Math.floor(Math.random() * number.length)]; //Elige un numero al alzar

  const card1 = document.querySelector(".card1");
  const myDiv = document.createElement("div");

  if (randomSuit == "♥") {
    //Aplica la clase para la pinta de carta que salio
    myDiv.classList.add("heart");
  } else if (randomSuit == "♦") {
    myDiv.classList.add("diamond");
  } else if (randomSuit == "♠") {
    myDiv.classList.add("spade");
  } else {
    myDiv.classList.add("clover");
  }
  const UpperSuit = document.createElement("p"); //Crea el texto superior con el numero aleatorio
  const Number = document.createElement("p"); //Crea un texto con la pinta que salio al azar
  const LowerSuit = document.createElement("p"); //Crea el texto inferior con el numero aleatorio

  UpperSuit.classList.add("suit"); //Aplica la clase para el numero de carta que salio
  Number.classList.add("number"); //Aplica la clase para la pinta de carta que salio
  LowerSuit.classList.add("suit", "rotate"); //Aplica la clase para el numero de carta que salio

  UpperSuit.innerHTML = randomSuit; //aplica el numero aleatorio al texto
  Number.innerHTML = randomNumber; //aplica la pinta aleatorio al texto
  LowerSuit.innerHTML = randomSuit; //aplica el numero aleatorio al texto

  card1.appendChild(myDiv);
  myDiv.appendChild(UpperSuit);
  myDiv.appendChild(Number);
  myDiv.appendChild(LowerSuit);
  console.log(randomSuit);
};
