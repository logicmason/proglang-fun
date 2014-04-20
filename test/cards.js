var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

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

var hand3 = {
  tag: 'hand',
  left: { tag: 'card', suit: 'Spades', rank: '4'},
  right: {
    tag: 'hand',
    left: { tag: 'card', suit: 'Spades', rank: '3'},
    right: {
      tag:'hand',
      left: { tag: 'card', suit: 'Diamonds', rank: 'Queen' },
      right: { tag: 'card', suit: 'Hearts', rank: 'Jack'}
    }
  }
}

var hand4 = {
  tag: 'hand',
  right: { tag: 'card', suit: 'Spades', rank: 'King'},
  left: {
    tag: 'hand',
    right: { tag: 'card', suit: 'Diamonds', rank: '3'},
    left: { tag: 'card', suit: 'Clubs', rank: '9'}
  }
}

var hand5 = {
  tag: 'hand',
  right: { tag: 'card', suit: 'Spades', rank: '4'},
  left: {
    tag: 'hand',
    right: { tag: 'card', suit: 'Spades', rank: '3'},
    left: {
      tag:'hand',
      right: { tag: 'card', suit: 'Diamonds', rank: 'Queen' },
      left: { tag: 'card', suit: 'Hearts', rank: 'Jack'}
    }
  }
}

describe('Testing', function(){
  it('Truth and falsehood are different', function(){
    assert(true !== false);
  });
});

describe('Reverse', function(){
  it('should not change a single card', function(){
    assert(hand2 === reverse(hand2));
  });

  it('should reverse the order of three cards', function(){
    assert(hand1 !== reverse(hand1));
    assert.deepEqual(hand1, reverse(hand4));
  });

  it('should reverse the order of more cards', function(){
    assert(hand3 !== reverse(hand3));
    assert.deepEqual(hand3, reverse(hand5));
  });
});