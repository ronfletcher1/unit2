
const freshDeck = createDeck();
let theDeck = freshDeck.slice();
// we need to use slice, or we will
// copy the pointer/reference to the
// Array, and we will change the 
// original deck
let playerHand = [];
let dealerHand = [];

// blackjack deal function
$('.deal-button').click(()=>{
    // console.log("User clicked on the deal button")
    // we need a deck!
    theDeck = freshDeck.slice();
    // we have a deck. we need to shuffle it!
    shuffleDeck(theDeck);
    // We have a shuffled deck. Now give each player their cards
    // playerHand.push(theDeck[0])
    // shift pulls the first element off of the array
    // and returns it
    // console.log(theDeck)
    // get the first element off of the deck and put it in topCard
    let topCard = theDeck.shift();
    // put the top card in playerHand array // console.log(topCard) // console.log(theDeck)
    playerHand.push(topCard);
    // Take next card in deck
    topCard = theDeck.shift();
    // give the dealer the new topCard
    dealerHand.push(topCard);
    topCard = theDeck.shift();
    playerHand.push(topCard);
    topCard = theDeck.shift();
    dealerHand.push(topCard);
    //console.log(theDeck.length);
    placeCard('player',1,playerHand[0])
    placeCard('dealer',1,dealerHand[0])
    placeCard('player',2,playerHand[1])
    placeCard('dealer',2,dealerHand[1])
    calculateTotal(playerHand, 'player')
    calculateTotal(dealerHand, 'dealer')
})

function calculateTotal(hand, who){
    // purpose
    // 1. find out the number and return
    // 2. Update the DOM with the right number for 
    // whoever's hand it is
    let handTotal = 0;
    // loop through the hand
    hand.forEach((card,i)=>{
        // console.log(card);
        // copy everything in the string, EXCEPT for the last
        // character
        let thisCardsValue = card.slice(0,-1);
        handTotal += Number(thisCardsValue)
    })
    console.log(handTotal)
}

function placeCard(who,where,what){
    // who = ? ... option 1: 'player', option: 'dealer'
    // where = ? ... option 1-6
    // what = ? ... 1h-13h, 1s-13s, 1d-13d, 1c-13c
    const classSelector = `.${who}-cards .card-${where}`;
    $(classSelector).html(`<img src="cards/${what}.png"/>)`)
}

function createDeck(){
    // I am a local variable. No one knows about this var, but me
    let newDeck = [];
    // Card = suit letter + value
    const suits = ['h', 's', 'd', 'c'];
    // outer loop is for each suit
    // for(let s = 0; s < suits.length; s++){

    // }
    // a forEach loop takes 1 arg: function
    // that function gets 2 args:
    // 1. what to call this element in loop
    // 2. index loop is on
    suits.forEach((s, index)=>{
        for(let c = 1; c <= 13; c++){
            newDeck.push(`${c}${s}`);
        }
    })
    //console.log(newDeck)
    return newDeck;
}

function shuffleDeck(aDeckToBeShuffled){
    // Loop. A lot. Like those machines in casinos that make
    // funny noises.
    // When the loop (lots of times) is document, the array
    // (deck) will be shuffled
    for(let i = 0; i < 10000; i++){
        let rand1 = Math.floor(Math.random() *52);
        let rand2 = Math.floor(Math.random() *52);
        // we need to switch a aDeckToBeShuffled[rand1] with
        // aDeckToBeShuffled[rand2].
        // BUT, we have to save the value of one of them so
        // we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    console.log(aDeckToBeShuffled)
    //return newDeck
}