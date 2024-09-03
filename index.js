class Deck {
    constructor() {
        this.suits = ['Diamonds', ' Hearts', 'Clubs', 'Spades'];
        this.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', ' King'];
        this.deck = []
        this.discardPile = []

        this.initialize();
       
        
    }
    //initialize Deck
    initialize(){
         this.deck = [];
        for(let i = 0; i < this.suits.length;  i ++){
            for(let j = 0; j < this.values.length; j++){
                this.deck.push({suit: this.suits[i], value: this.values[j]});
            }
        }
    }
    //using shift method .shift()
    draw(){
        const card = this.deck.shift();
        return card
    }
    
    discard(card){
       card = this.draw();
       this.discardPile.push(card)
    }
    
    addCard(card){
        
    }
    
    
    
    /*shuffle(){
        for(i = 0; i < deck.legnth; i++){
            shuffle = Math.floor(Math.random()*(deck.length));
            //for loop the deck, swithces current index of card with randomized card 
            temp = deck[i]; 
            deck[i] = deck[shuffle];
            deck[shuffle] =  temp;
    
        }
    }*/
    


}
class Card {
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }
}



module.exports.Deck = Deck

module.exports.Card = Card