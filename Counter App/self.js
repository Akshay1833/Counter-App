// setting initial count to 0
let count = 0

//getting hold of count_element
let countEl = document.getElementById("count_element");



//everytime increment button is pressed, adds 1+ to count and displays it in <h2>
function increment() {
    count+=1
    countEl.innerHTML = count
    console.log(count)
}

//everytime save button is pressed, will display total count
total_entries = document.getElementById("totalEntries");
function save() {
    total_entries.innerHTML += count + "-"
    count = 0
    countEl.innerHTML = count
}