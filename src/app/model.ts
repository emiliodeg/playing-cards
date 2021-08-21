const SUITS: string[] = ["♥", "♦", "♣", "♠"];
const VALUES: number[] = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const SHAPES: string[][] = [
  ["🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾"],
  ["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"],
  ["🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎"],
  ["🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞"]
];

export class CardDeckFactory {
  factory() {
    return SUITS.flatMap((suit, suitIndex) => {
      return VALUES.map((value, index) => {
        return new Card(suit, value, SHAPES[suitIndex][index]);
      });
    });
  }
}

class Deck {
  constructor(private cards: Card[]) {}
}

class Card {
  constructor(
    private suit: string,
    private value: number,
    private shape: string
  ) {}

  getCard() {
    return this.shape;
  }
}
