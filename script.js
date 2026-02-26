const nameHeading = document.querySelector('h1');
const hour = new Date ().getHours();
if (hour <12) {
    nameHeading.textContent = "Good Morning, Monica";   
}else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, Monica";
}else {
    nameHeading.textContent = "Good Evening, Monica";

}