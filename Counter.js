// Initial Counter

let count = 0;

// Select elements
const counterDisplay = document.getElementById("counter");
const counterIncrement = document.getElementById("increment");
const counterDecrement = document.getElementById("decrement");
const counterReset = document.getElementById("reset");


// update counter values

function updateCounter() {
  counterDisplay.textContent = count;
}

// Increment Counter eventlistener

counterIncrement.addEventListener('click', function(){
  count++;
  updateCounter();
})
counterDecrement.addEventListener('click', function(){
  count--;
  updateCounter();
})
counterReset.addEventListener('click', function(){
  count = 0;
  updateCounter();
})
