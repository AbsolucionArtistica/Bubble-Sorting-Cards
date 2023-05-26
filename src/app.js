/* eslint-disable */
import "bootstrap";
import "./style.css";

let suit = ["♦", "♥", "♠", "♣"];
let number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13"
];

let generatedCards = [];
let changeLog = [];

function CardGenerator() {
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  const cardContainer = document.querySelector(".originalCards");
  const card = document.createElement("div");
  card.classList.add("card", "card1"); // Add the "card1" class

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const upperSuit = document.createElement("p");
  const numberText = document.createElement("p");
  const lowerSuit = document.createElement("p");

  upperSuit.classList.add("suit");
  numberText.classList.add("number");
  lowerSuit.classList.add("suit", "rotate");

  if (randomSuit == "♥") {
    cardContent.classList.add("heart");
  } else if (randomSuit == "♦") {
    cardContent.classList.add("diamond");
  } else if (randomSuit == "♠") {
    cardContent.classList.add("spade");
  } else {
    cardContent.classList.add("clover");
  }

  if (randomNumber == "1") {
    numberText.innerHTML = "A";
  } else if (randomNumber == "11") {
    numberText.innerHTML = "J";
  } else if (randomNumber == "12") {
    numberText.innerHTML = "Q";
  } else if (randomNumber == "13") {
    numberText.innerHTML = "K";
  } else {
    numberText.innerHTML = randomNumber;
  }

  upperSuit.innerHTML = randomSuit;
  lowerSuit.innerHTML = randomSuit;

  cardContent.appendChild(upperSuit);
  cardContent.appendChild(numberText);
  cardContent.appendChild(lowerSuit);
  card.appendChild(cardContent);
  cardContainer.appendChild(card);

  return card;
}

const numberOfCards = document.getElementById("numberInput");
const drawButton = document.getElementById("drawButton");
const sortButton = document.getElementById("sortButton");
const changeLogElement = document.getElementById("container");

drawButton.addEventListener("click", function() {
  const cardContainer = document.querySelector(".originalCards");
  cardContainer.innerHTML = ""; // Clear the old cards

  generatedCards = [];
  changeLog = [];

  const quantity = parseInt(numberOfCards.value);

  for (let i = 0; i < quantity; i++) {
    let card = CardGenerator();
    generatedCards.push(card);
  }

  changeLogElement.innerHTML = ""; // Clear the change log when drawing new cards
});

sortButton.addEventListener("click", function() {
  const sortedCards = bubbleSort(generatedCards);
  changeLog = [];

  for (let i = 0; i < sortedCards.length; i++) {
    let step = sortedCards[i].outerHTML;
    changeLog.push(step);
  }

  displayChangeLog();
});

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      const currentValue = getValue(arr[i]);
      const nextValue = getValue(arr[i + 1]);

      if (currentValue > nextValue) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;

        // Capture the intermediate step
        const step = arr.map(card => card.outerHTML);
        changeLog.push(step);
      }
    }
  } while (swapped);

  return arr;
}

function getValue(card) {
  const numberElement = card.querySelector(".number");
  const value = numberElement.innerHTML;

  if (value === "A") {
    return 1;
  } else if (value === "J") {
    return 11;
  } else if (value === "Q") {
    return 12;
  } else if (value === "K") {
    return 13;
  } else {
    return parseInt(value);
  }
}

function displayChangeLog() {
  changeLogElement.innerHTML = "";

  for (let i = 0; i < changeLog.length; i++) {
    const cardEntry = document.createElement("div");
    cardEntry.innerHTML = changeLog[i];
    changeLogElement.appendChild(cardEntry);
  }
}
