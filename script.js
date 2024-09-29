//Webpage Color palette - Greens: 97B10F, A4BF20. Blacks: 2823ID, 0C0908. White: FFFFFF, FBFCF8//
const homeButton = document.getElementById("homeBtn");
const contactButton = document.getElementById("contactBtn");
const supportButton = document.getElementById("supportBtn");
const newsButton = document.getElementById("newsBtn");

homeButton.addEventListener("click", function(e){
    console.log("You're on the home page already")
});
contactButton.addEventListener("click", function(e){
    alert("There's no contact page yet")
});
supportButton.addEventListener("click", function(e){
    alert("There's no page yet")
});
newsButton.addEventListener("click", function(e){
    alert("There's no news page yet")
});

