const quoteBtn = document.getElementById('quote-btn');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const nameHeading = document.querySelector('h1');
const hour = new Date ().getHours();
const year = new Date ().getFullYear();
const time = new Date().toLocaleTimeString();
if (hour <12) {
    nameHeading.textContent = "Good Morning, Monica";   
}else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, Monica";
}else {
    nameHeading.textContent = "Good Evening, Monica";

}
console.log("The current hour is: " + hour);

document.getElementById('time').textContent = time
document.getElementById('copyright').textContent = `Copyright © ${year} Monica N`

const personalStatement = document.querySelector('.highlight')
personalStatement.style.backgroundColor = '#EEFFDB'

alert("Thanks for visiting my profile.")


quoteBtn.addEventListener('click', function() {
    // 1. Fetch: Sends a request to the API
    quoteText.textContent = "Fetching new inspiration..."
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json()) // 2. Convert raw data into a JS Object
    .then(data => {
        
    // 3. Action: Update the HTML with data from the API
    quoteText.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `— ${data.author}`;
    });
    
});
