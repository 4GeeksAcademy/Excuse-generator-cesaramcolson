/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The cat", "My dad", "The maid", "The Doctor", "My girlfriend"];
  const choosenWho = chooseRandomItem(who);

  let action = ["ate", "fixed", "crushed", "broke", "stole"];
  const choosenAction = chooseRandomItem(action);

  let what = ["my homework", "my phone", "my car", "my house"];
  const choosenWhat = chooseRandomItem(what);

  let when = [
    "before the concert",
    "when I was eating",
    "while I was exercising",
    "during my dinner",
    "while I was praying"
  ];
  const choosenWhen = chooseRandomItem(when);

  const newHeader = `${choosenWho} ${choosenAction} ${choosenWhat} ${choosenWhen}`;

  const h1 = document.querySelector("#excuse");
  h1.textContent = newHeader;

  function chooseRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
};
