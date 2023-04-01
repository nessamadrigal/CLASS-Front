let my_deck = [];
for (let i = 1; i <= 52; i++) {
    my_deck.push(i);
}
console.log(my_deck);

var indexToSplit = my_deck.indexOf('56');
var firstPlayer = my_deck.slice(0, 26);
var secondPlayer = my_deck.slice(26, 52);

console.log({firstPlayer, secondPlayer});

const descriptionOfCards = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];

let deck = [];

for(let i = 0; i <descriptionOfCards.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = {Value: values[x], descriptionOfCards: descriptionOfCards[i] };
        deck.push(card);
    }
}

for(let i = deck.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck [j];
    deck [j] = temp;
}

console.log('The first five cards are:');
console.log('4 of Hearts, 4 of Diamonds, 4 of Clubs, 4 of Spades');

const myShuffle => () {
    console.log();
}

for ( i = 0; i < myShuffle.length; i++) {
    console.log(myShuffle[i]);
}