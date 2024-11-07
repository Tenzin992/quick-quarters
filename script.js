function handleOrderSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const subscription = document.getElementById("subscription").value;
    const orderAmount = document.getElementById("orderAmount").value;
    const customAmount = document.getElementById("customAmount").value;
    const zipCode = document.getElementById("zipCode").value;
    const contact = document.getElementById("contact").value;

    // List of allowed zip codes (replace these with your actual delivery area codes)
    const allowedZipCodes = ["94110", "94111", "94112", "94114"]; // Add more if needed

    // Check if the zip code is within the delivery area
    if (!allowedZipCodes.includes(zipCode)) {
        document.getElementById("orderMessage").textContent =
            "Sorry, we currently only deliver to certain zip codes in the San Francisco Bay Area.";
        document.getElementById("orderMessage").style.color = "red";
        return;
    }

    // Determine the order amount message
    let orderAmountMessage = orderAmount === "50+"
        ? `$${customAmount} in quarters`
        : `$${orderAmount} in quarters`;

    // Display confirmation message on the page
    document.getElementById("orderMessage").textContent =
        `Thank you for your order! A ${subscription} subscription with ${orderAmountMessage} will be delivered. We will contact you at ${contact}.`;
    document.getElementById("orderMessage").style.color = "green";

    // Simulate email confirmation to the customer
    sendEmailConfirmation(contact);

    // Clear the form
    document.getElementById("orderForm").reset();
}

// Function to simulate email confirmation
function sendEmailConfirmation(contact) {
    alert(`Confirmation email sent to ${contact}. Thank you for using Quick Quarters Delivery!`);
}

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
