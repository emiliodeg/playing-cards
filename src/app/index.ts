import { CardDeckFactory } from "./model";

const cards = new CardDeckFactory().factory();

const cartas = document.getElementById("cartas");

cards.forEach((card) => {
  const c = document.createElement("div");
  c.innerHTML = card.getCard();

  cartas?.appendChild(c);
});
