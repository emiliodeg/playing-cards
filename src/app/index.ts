import { CardDeckFactory } from "./model";

const cards = new CardDeckFactory().factory();

const cardsElement = document.getElementById("cards");

cards.forEach((card) => {
  const c = document.createElement("div");
  c.innerHTML = card.getCard();

  cardsElement?.appendChild(c);
});
