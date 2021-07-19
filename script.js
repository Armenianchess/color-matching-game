const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsMatched = 0;
let cantClick = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick); 

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {


  if (cantClick === true) {
    return
  }

  if(e.target.classList.contains("flipped")) {
    return
  }


  let clickedCard = e.target;
 
  clickedCard.style.backgroundColor = clickedCard.classList[0]
// basically if card 1 or 2 dont exist
// and at the moment of if statement they dont exist
// make them exist as in card1 = card1 or card1 = clickedcard
// why is it when this runs --> 
//e.target.classList.contains ("flipped")
// and the return is executed why doesnt everything stop?
if (!card1 || !card2) {
  clickedCard.classList.add('flipped')
  card1 = card1 || clickedCard;
  // console.log('card 1 ' , card1)
  card2 = clickedCard === card1 ? null : clickedCard
  // console.log('card 2 ' , card2)
  // console.log('e.target',e.target)

}

if (card1 && card2) {
  console.log(card1,card2)
  cantClick = true
  let gif1 = card1.className
  let gif2 = card2.className

  if (gif1 === gif2) {

    cardsMatched += 2;
    console.log(cardsMatched)
    card1.removeEventListener('click', handleCardClick)
    card2.removeEventListener('click', handleCardClick)
    card1 = null
    card2 = null
    cantClick = false
  } else {
    setTimeout(function () {
      console.log(card1,card2)
      card1.style.backgroundColor = ''
      card2.style.backgroundColor = ''
      card1.classList.remove('flipped')
      card2.classList.remove('flipped')
      card1 = null
      card2 = null
      cantClick = false
    }, 1000)
  }
}


  if (cardsMatched === COLORS.length) {
    setTimeout(function () {
      alert('YOU WIN!!!')
    }, 1000)

  }


  
  // if (card1 !== card2) {
  //   setTimeout(function closeCard () {
  //     card1.style.backgroundColor = ''
  //     card2.style.backgroundColor = ''
      
  //   },3000)
  // }

 
  
}



// when the DOM loads
createDivsForColors(shuffledColors);



/*
1. Clicking a card should change the background color 
to be the color of the class it has.

2. Users should only be able to change at most two cards
 at a time.

3. Clicking on two matching cards should be a “match” 
— those cards should stay face up.

4.When clicking two cards that are not a match, 
they should stay turned over for at least 1 second before
 they hide the color again. You should make sure to use 
 a setTimeout so that you can execute code after one second.


Part Three - Gotchas
Make sure this works only if you click on two different 
cards — clicking the same card twice
 shouldn’t count as a match!)
Make sure that you can not click too quickly and guess
 more than two cards at a time.
*/





















  
















  
















  
















  
















  
















  
















  
















  
















  
















  
















  
















  
















  
















  















// you can use e.target to see which element was clicked
  // console.log("you just clicked", e.target);

  //   if (cardCounter >= 2) {
  //     return
  //   }
  
  // let currentCard = e.target;

  // currentCard.style.backgroundColor = currentCard.classList[0]
  // cardCounter++
  // console.log(cardCounter)
  
  // card1 = card1 || currentCard;
    
  // console.log('card1 is =',card1)
  
  // if(card2 = currentCard === card1) {
  //   card2 === null
  //   console.log('card2 is =',card2)
  // } else {
  //   card2 = currentCard
  //   console.log('card2 is =',card2)
  //   if (card1.classList[0] === card2.classList[0]) {
     
  // } 
 
  // }

  
















  
















  
















  
















  
















  
















  
















  
















  
















  