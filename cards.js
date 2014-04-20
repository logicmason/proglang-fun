//Example structure of hands
var hand1 = {
  tag: 'hand',
  left: { tag: 'card', suit: 'Spades', rank: 'King'},
  right: {
    tag: 'hand',
    left: { tag: 'card', suit: 'Diamonds', rank: '3'},
    right: { tag: 'card', suit: 'Clubs', rank: '9'}
  }
}

var hand2 = {
  tag: 'card', suit: 'Clubs', rank: '2'
}


var reverse = function(hand) {
  // your code here!
}
