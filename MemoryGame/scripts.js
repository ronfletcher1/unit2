// add a ready listener to the whole DOM
// if., javascript wait until the DOM is finished loading
// before running anything


let playGame = ()=>{$('.row').html(`
<div class="col-sm-12 text-center memory-game">
    <h1>Difficulty Level?</h1>
    <button diff=4 class="btn btn-lg btn-success diffLevel">EASY</button>
    <button diff=12 class="btn btn-lg btn-warning diffLevel">MEDIUM</button>
    <button diff=28 class="btn btn-lg btn-danger diffLevel">DIFFICULT!!</button>
</div>
       `)
$('button.diffLevel').click(function(){
    // console.log($(this));
    // attr method, will get the value of that attribute
    let gridSize = $(this).attr('diff');
    let waitTime = 2000
    // if 
    console.log(gridSize);
    let cards = []
    // our images start at 1. So start i at 1
    // every time through the loop, we push 2 images
    // on because this is a matching game, we need 2
    // so we loop half of the grid size (gridSize/2), but
    // we need to add 1, because we started at 1, not 0
    // OR, we need to end at <=2
    for(let i = 1; i <= gridSize/2; i++){
        let kamalaNumber = i;
        if(i<10){
            kamalaNumber = "0"+i;
        }
        cards.push(`<img class="kam img-responsive" src="./images/kamala-${kamalaNumber}.jpeg"/>`);
        cards.push(`<img class="kam img-responsive" src="./images/kamala-${kamalaNumber}.jpeg"/>`);
    };
    cards = shuffleDeck(cards);
    // console.log(cards)
    // init a var to store our html inside of
    let memoryHTML = '';
    // loop through all the carsd
    cards.forEach((card)=>{
        memoryHTML += `
        <div class="card col-sm-3 img-responsive">
            <div class="card-holder img-responsive">
                <div class="card-front img-responsive">${card}</div>
                <div class="card-back img-responsive"></div>
            </div>
        </div>
       `
    });
    // console.log(memoryHTML);
    // sorry, Jonathan... Rob will teach them a better way later!!!
    $('.memory-game').html(memoryHTML);

    // User just clicked on a card
    $('.card-holder').click(function(){
        $(this).addClass('flip');
        let cardsUp = $('.flip')
        // if cardsUp has 2 customElements, then this is 
        // the 2nd card. compare...
        if(cardsUp.length === 2){
            const card1= cardsUp[0];
            const card2= cardsUp[1];
            if(card1.innerHTML == card2.innerHTML){
                //  these cards match!
                // remove flip
                cardsUp.removeClass('flip')
                cardsUp.addClass('matched')
            // console.log($('.card-holder'))
            let cardHolders = $('.card-holder')
            console.log($('.matched').length)
            if($('.matched').length >= gridSize){
                // do something
                console.log('winner',$('.matched').length, gridSize)
                
            }
            let numMatched = 0;
            for(let i = 0; i < cardHolders.length; i++){
           
                if(numMatched === cardHolders.length){
                    console.log("winner")
                    $('.memory-game').html('Winner winner chicken dinner')
                }  
            }
            }else{
                // these are not a match because the HTML is different
                // JS is too dang fast. We have to let the user 
                // see the card before we flip it back
                // setTimeout to the rescue!
                setTimeout(()=>{
                    cardsUp.removeClass('flip');
                },2000);
            }
        }else{
           // only one card up. Do nothing 
        }
    });
});   

}


$(document).ready(()=>{
    playGame();
});

$('.reset').click(()=>{
    playGame();
});


function shuffleDeck(aDeckToBeShuffled){
    // Loop. A lot. Like those machines in casinos that make 
    // funny noises.
    // When the loop (lots of times) is document, the array 
    // (deck) will be shuffled
    for(let i = 0; i < 1000000; i++){
        let rand1 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        let rand2 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        // we need to switch aDeckToBeShuffled[rand1] with
        // aDeckToBeShuffled[rand2].
        // BUT, we have to save the value of one of them so
        // we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2];
        aDeckToBeShuffled[rand2] = card1Defender;
    };
    console.log(aDeckToBeShuffled);
    return aDeckToBeShuffled;
};