const {Deck, Card} = require('./index');


test('First Test',() =>  {
   const deck = new Deck()
    expect(deck.deck.length).toBe(52)
})


test('Draw Test', () =>{
    const deck = new Deck()
    deck.draw();
    expect(deck.deck.length).toBe(51)
})

test('Discard Test', () => {
    const deck = new Deck()
    deck.discard();
    expect(deck.discardPile.length).toBe(1)
})

test('Add Test', () =>{
    const deck = new Deck()
    deck.addCard();
    expect(deck.deck.length).toBe(53)
})