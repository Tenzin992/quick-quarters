// Show or hide the custom amount field based on the selected order amount
document.getElementById("orderAmount").addEventListener("change", function() {
    const customAmountLabel = document.getElementById("customAmountLabel");
    const customAmount = document.getElementById("customAmount");

    if (this.value === "50+") {
        customAmountLabel.style.display = "block";
        customAmount.style.display = "block";
        customAmount.required = true;
    } else {
        customAmountLabel.style.display = "none";
        customAmount.style.display = "none";
        customAmount.required = false;
    }
});

// Display a message after the form submits
document.getElementById("orderForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Display a temporary message indicating the form is being submitted
    document.getElementById("orderMessage").textContent = 
        "Submitting your order...";
    document.getElementById("orderMessage").style.color = "blue";

    // Clear the form fields after a short timeout
    setTimeout(() => {
        document.getElementById("orderForm").reset(); // Reset the form
        document.getElementById("orderMessage").textContent = ""; // Clear the message
    }, 1000); // Adjust the timeout as needed (1000ms = 1 second)
});
