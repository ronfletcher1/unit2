
const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];

// blackjack deal function
$('.deal-button').click(()=>{
    // console.log("User clicked on the deal button")
    // we need a deck!

    // clear out the old cards
    ('.card').html('');
    playerHand = [];
    dealerHand = [];

    theDeck = freshDeck.slice();
    // theDeck = freshDeck
    // we have a deck. we need to shuffle it!
    shuffleDeck(theDeck);
    // We have a shuffled deck. Now give each player their cards
    // playerHand.push(theDeck[0])
    // shift pulls the first element off of the array
    // and retuns it
    // console.log(theDeck)
    // get the first element off of the deck and put it in topCard
    let topCard = theDeck.shift();
    // put topCard in the playerHand array
    playerHand.push(topCard);
    // Take next card in deck
    topCard = theDeck.shift();
    // give the dealer the new topCar
    dealerHand.push(topCard);
    topCard = theDeck.shift();
    playerHand.push(topCard);
    topCard = theDeck.shift();
    dealerHand.push(topCard);
    // console.log(theDeck.length)
    placeCard('player',1,playerHand[0]);
    placeCard('dealer',1,dealerHand[0]);
    placeCard('player',2,playerHand[1]);
    placeCard('dealer',2,dealerHand[1]);
    calculateTotal(playerHand,'player')
    calculateTotal(dealerHand,'dealer')
})

$('.hit-button').click(()=>{
    // grab the next card in the deck 
    const topCard = theDeck.shift();
    // push it onto the players Hand
    playerHand.push(topCard)
    placeCard('player',playerHand.length,topCard);
    calculateTotal(playerHand, 'player')
})

$('.stand-button').click(()=>{
    // console.log("User stands!!")
    // What happens to the players hand, when they stand?
    // Nothing.
    // Control passes to the dealer
    // Rules for the dealer:
    // 1. If I have less than 17, I MUST hit.
    // 2. If I have 17 or more I CANNOT hit, even if it
    // means I will lose
    let dealersTotal = calculateTotal(dealerHand,'dealer');
    while (dealersTotal < 17){
        const topCard = theDeck.shift();
        dealerHand.push(topCard);
        placeCard('dealer',dealerHand.length,topCard);
        dealersTotal = calculateTotal(dealerHand,'dealer');
    }
    checkWin();
})

function checkWin(){
    const playerTotal = calculateTotal(playersHand,'player');
    const dealersTotal = calculateTotal(dealersHand,'dealer');

    // 1. If the player has > 21, player busts and loses.
    // 2. If the dealer has > 21, dealer busts and loses.
    // 3. If playersHand.length == 2 AND playerTotal == 21... BLACKJACK
    // 4. If dealerHand.length == 2 AND dealersTotal == 21... BLACKJACK
    // 5. If player > dealer, player wins
    // 6. if dealer > player, dealer wins
    // 7. else... push (tie)
}


function calculateTotal(hand, who){
    // purpose:
    // 1. Find out the number and return
    // 2. Update the DOM with the right number for
    // whoever's hand it is
    let handTotal = 0;
    //  init bool for whether this hand has an ace or not
    let hasAce = false;
    // Loop through the hand
    hand.forEach((card,i)=>{
        // console.log(card);
        // copy everything in the String, EXCEPT for the last
        // char
        // 1h
        // 5s
        // 12d
        // 13c
        // 1h, 13k - SHOULD = 21, or BLACKJACK!
        let thisCardsValue = card.slice(0,-1);
        // handle J, Q, K, & A
        if(thisCardsValue > 10){
            thisCardsValue = 10;
        }else if(thisCardsValue ==1){
            // this is an Ace
            // flip our boolean
            hasAce = true;
            numAces++;
            // thisCardsValue = 11;
        }
        handTotal += Number(thisCardsValue);
    })
    // Done looping. we have their total hand, with all aces
    // as 11, and all face cards as 10
    // how many aces should we bother reduce down to a 1?
    if(hasAce & handTotal <= 10){
        // add 10 one time
        handTotal += 10;
        // start remove 10 for each ace
        // for (let i = 0, )
        // }
    console.log(handTotal)
    const classSelector = `.${who}-total`;
    $(classSelector).html(handTotal);
    return handTotal

}

function placeCard(who,where,what){
    // who = ? ... option 1: 'player', option: 'dealer'
    // where = ? ... option 1-6
    // what = ? ... 1h-13h, 1s-13s, 1d-13d, 1c-13c 
    const classSelector = `.${who}-cards .card-${where}`;
    $(classSelector).html(`<img src="/cards/${what}.png" />`);
}


function createDeck(){
    // I am a local variable. No one knows about this var, but me!
    let newDeck = [];
    // Card = suit letter + value
    const suits = ['h','s','d','c'];
    // Outer loop is for each suit
    // a foreach loop takes 1 arg: function
    // that function gets 2 args:
    // 1. what to call this element in loop
    // 2. index loop is on
    suits.forEach((s,index)=>{
        // inner loop for card value
        for(let c = 1; c <= 13; c++){
            newDeck.push(`${c}${s}`);
        }
    })
    // console.log(newDeck)
    return newDeck;
}

function shuffleDeck(aDeckToBeShuffled){
    // Loop. A lot. Like those machines in casinos that make 
    // funny noises.
    // When the loop (lots of times) is document, the array 
    // (deck) will be shuffled
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random() * 52);
        let rand2 = Math.floor(Math.random() * 52);
        // we need to switch aDeckToBeShuffled[rand1] with
        // aDeckToBeShuffled[rand2].
        // BUT, we have to save the value of one of them so
        // we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    // console.log(aDeckToBeShuffled);
}
