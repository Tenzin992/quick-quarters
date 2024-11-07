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

// Optional: Display a message after the form submits
document.getElementById("orderForm").addEventListener("submit", function(event) {
    document.getElementById("orderMessage").textContent = 
        "Thank you for your order! We'll be in touch shortly.";
    document.getElementById("orderMessage").style.color = "green";
});
