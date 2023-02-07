// setting the count to 0
let count = 0

// getting hold of the <h2> element by the id and storing value in countEL
let countEl = document.getElementById("count-el")

// increments the counter everytime the 'INCREMENT' button is pressed
function increment () {
    count+=1 //adding +1 everytime the button is clicked
    countEl.innerText = count //using <h2> element and setting the value to new count, ie. 1
}

//getting hold of <p> element by using id and storing value in saveEL
let saveEL = document.getElementById("save-el")

//saving previously clicked increment totala value 
function save() {
    totalCount = count + " - "  //storing total count in totalCount, followed by hyphen
    newTotal = saveEL.textContent += totalCount //concatenating string from <p> and adding total count
    increment(count=-1) //resets initial count to 0 once clicked on save
}



