document.addEventListener("DOMContentLoaded", () => {
  // create my cards
  const cardsArr = [
    {
      name: "grigriboitejouet",
      img: "images/grigriboitejouet.jpg",
    },
    {
      name: "grigriboitejouet",
      img: "images/grigriboitejouet.jpg",
    },
    {
      name: "grigricoussin",
      img: "images/grigricoussin.jpg",
    },
    {
      name: "grigricoussin",
      img: "images/grigricoussin.jpg",
    },
    {
      name: "grigridodoalenvers",
      img: "images/grigridodoalenvers.jpg",
    },
    {
      name: "grigridodoalenvers",
      img: "images/grigridodoalenvers.jpg",
    },
    {
      name: "grigriescaliers",
      img: "images/grigriescaliers.jpg",
    },
    {
      name: "grigriescaliers",
      img: "images/grigriescaliers.jpg",
    },
    {
      name: "poussechec",
      img: "images/poussechec.jpg",
    },
    {
      name: "poussechec",
      img: "images/poussechec.jpg",
    },
    {
      name: "poussgricalinou",
      img: "images/poussgricalinou.jpg",
    },
    {
      name: "poussgricalinou",
      img: "images/poussgricalinou.jpg",
    },
    {
      name: "poussgrigrialenvers",
      img: "images/poussgrigrialenvers.jpg",
    },
    {
      name: "poussgrigrialenvers",
      img: "images/poussgrigrialenvers.jpg",
    },
    {
      name: "grigrienormedodo",
      img: "images/grigrienormedodo.jpg",
    },
    {
      name: "grigrienormedodo",
      img: "images/grigrienormedodo.jpg",
    },
    {
      name: "teteatete",
      img: "images/teteatete.jpg",
    },
    {
      name: "teteatete",
      img: "images/teteatete.jpg",
    },
  ];

  cardsArr.sort(() => 0.5 - Math.random());

  // initialize basic variables
  const board = document.getElementById("board");
  const displayScore = document.querySelector("#score");
  let clickedCard = [];
  let clickedCardId = [];
  let foundCards = [];

  // initialize the board

  function boardIni() {
    for (let i = 0; i < cardsArr.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/back.jpg");
      card.setAttribute("card-id", i);
      card.addEventListener("click", flip);
      board.appendChild(card);
    }
  }

  function tryAgain() {
    const tryagain = document.getElementById("tryagain");
    tryagain.style.visibility = "visible";
    setTimeout(() => {
      tryagain.style.visibility = "hidden";
    }, 2000);
  }

  function sameCard() {
    const samecard = document.getElementById("samecard");
    samecard.style.visibility = "visible";
    setTimeout(() => {
      samecard.style.visibility = "hidden";
    }, 2000);
  }

  function congratulations() {
    const congrats = document.getElementById("congrats");
    congrats.style.visibility = "visible";
    setTimeout(() => {
      congrats.style.visibility = "hidden";
    }, 2000);
  }

  // compare cards

  function sameOrNot() {
    const cards = document.querySelectorAll("img");
    const firstCard = clickedCardId[0];
    const secondCard = clickedCardId[1];

    if (firstCard == secondCard) {
      cards[firstCard].setAttribute("src", "images/back.jpg");
      cards[secondCard].setAttribute("src", "images/back.jpg");
      sameCard();
    } else if (clickedCard[0] === clickedCard[1]) {
      cards[firstCard].setAttribute("src", "images/yay.jpg");
      cards[secondCard].setAttribute("src", "images/yay.jpg");
      cards[firstCard].removeEventListener("click", flip);
      cards[secondCard].removeEventListener("click", flip);
      foundCards.push(clickedCard);
      // Great job! message here
    } else {
      cards[firstCard].setAttribute("src", "images/back.jpg");
      cards[secondCard].setAttribute("src", "images/back.jpg");

      tryAgain();
    }

    clickedCard = [];
    clickedCardId = [];
    displayScore.textContent = foundCards.length;
    if (foundCards.length === cardsArr.length / 2) {
      congratulations();
      displayScore.textContent = "Meow! You found all our pictures!";
    }
  }

  // flip cards

  function flip() {
    let cardId = this.getAttribute("card-id");
    clickedCard.push(cardsArr[cardId].name);
    clickedCardId.push(cardId);
    this.setAttribute("src", cardsArr[cardId].img);
    if (clickedCard.length == 2) {
      // settimeout to slow down the game and make it more enjoyable
      setTimeout(sameOrNot, 500);
    }
  }

  boardIni();
});
