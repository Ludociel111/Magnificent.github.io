// Track visitor count (using localStorage as a simple solution)
document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem("visitorCount") || 0;
    count++;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitorCount").textContent = count;
});

// Popup functionality
function openPopup() {
    document.getElementById("rateMePopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("rateMePopup").style.display = "none";
}

// Trigger the popup when the user tries to leave the site
window.addEventListener("beforeunload", function(event) {
    openPopup();
    event.preventDefault();
    return "";
});

// Handle the form submission
document.getElementById("rateForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value;

    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
    
    closePopup();
    alert("Thank you for your feedback!");
});