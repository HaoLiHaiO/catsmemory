document.addEventListener("DOMContentLoaded", function () {
    // create my cards
    var cardsArr = [
        {
            name: "grigriboitejouet",
            img: "images/grigriboitejouet.jpg"
        },
        {
            name: "grigriboitejouet",
            img: "images/grigriboitejouet.jpg"
        },
        {
            name: "grigricoussin",
            img: "images/grigricoussin.jpg"
        },
        {
            name: "grigricoussin",
            img: "images/grigricoussin.jpg"
        },
        {
            name: "grigridodoalenvers",
            img: "images/grigridodoalenvers.jpg"
        },
        {
            name: "grigridodoalenvers",
            img: "images/grigridodoalenvers.jpg"
        },
        {
            name: "grigriescaliers",
            img: "images/grigriescaliers.jpg"
        },
        {
            name: "grigriescaliers",
            img: "images/grigriescaliers.jpg"
        },
        {
            name: "poussechec",
            img: "images/poussechec.jpg"
        },
        {
            name: "poussechec",
            img: "images/poussechec.jpg"
        },
        {
            name: "poussgricalinou",
            img: "images/poussgricalinou.jpg"
        },
        {
            name: "poussgricalinou",
            img: "images/poussgricalinou.jpg"
        },
        {
            name: "poussgrigrialenvers",
            img: "images/poussgrigrialenvers.jpg"
        },
        {
            name: "poussgrigrialenvers",
            img: "images/poussgrigrialenvers.jpg"
        },
        {
            name: "grigrienormedodo",
            img: "images/grigrienormedodo.jpg"
        },
        {
            name: "grigrienormedodo",
            img: "images/grigrienormedodo.jpg"
        },
        {
            name: "teteatete",
            img: "images/teteatete.jpg"
        },
        {
            name: "teteatete",
            img: "images/teteatete.jpg"
        },
    ];
    cardsArr.sort(function () { return 0.5 - Math.random(); });
    // initialize basic variables
    var board = document.getElementById("board");
    var displayScore = document.querySelector("#score");
    var clickedCard = [];
    var clickedCardId = [];
    var foundCards = [];
    // initialize the board
    function boardIni() {
        for (var i = 0; i < cardsArr.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "images/back.jpg");
            card.setAttribute("card-id", i.toString());
            card.addEventListener("click", flip);
            board.appendChild(card);
        }
    }
    function tryAgain() {
        var tryagain = document.getElementById("tryagain");
        tryagain.style.visibility = "visible";
        setTimeout(function () {
            tryagain.style.visibility = "hidden";
        }, 2000);
    }
    function sameCard() {
        var samecard = document.getElementById("samecard");
        samecard.style.visibility = "visible";
        setTimeout(function () {
            samecard.style.visibility = "hidden";
        }, 2000);
    }
    var congrats = document.getElementById("congrats");
    function congratulations() {
        congrats.style.visibility = "visible";
    }
    var againBtn = document.getElementById("playagain");
    againBtn.addEventListener("click", playAgain);
    function playAgain() {
        while (board.lastChild) {
            board.removeChild(board.lastChild);
        }
        boardIni();
        congrats.style.visibility = "hidden";
        displayScore.textContent = "";
    }
    // compare cards
    function sameOrNot() {
        var cards = document.querySelectorAll("img");
        var firstCard = clickedCardId[0];
        var secondCard = clickedCardId[1];
        if (firstCard == secondCard) {
            cards[firstCard].setAttribute("src", "images/back.jpg");
            cards[secondCard].setAttribute("src", "images/back.jpg");
            sameCard();
        }
        else if (clickedCard[0] === clickedCard[1]) {
            cards[firstCard].setAttribute("src", "images/yay.jpg");
            cards[secondCard].setAttribute("src", "images/yay.jpg");
            cards[firstCard].removeEventListener("click", flip);
            cards[secondCard].removeEventListener("click", flip);
            foundCards.push(clickedCard);
            // Great job! message here
        }
        else {
            cards[firstCard].setAttribute("src", "images/back.jpg");
            cards[secondCard].setAttribute("src", "images/back.jpg");
            tryAgain();
        }
        clickedCard = [];
        clickedCardId = [];
        displayScore.textContent = foundCards.length.toString();
        if (foundCards.length === cardsArr.length / 2) {
            congratulations();
            displayScore.textContent = "Meow! You found all our pictures!";
            foundCards.splice(0, foundCards.length);
        }
    }
    // flip cards
    function flip() {
        var cardId = this.getAttribute("card-id");
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
