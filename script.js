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
