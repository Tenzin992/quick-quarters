function handleOrderSubmit(event) {
    // Prevent form from submitting if using a custom submission method (optional)
    // event.preventDefault(); // Uncomment this if you want to send data with JavaScript

    // Get form values
    const subscription = document.getElementById("subscription").value;
    const orderAmount = document.getElementById("orderAmount").value;
    const customAmount = document.getElementById("customAmount").value;
    const zipCode = document.getElementById("zipCode").value;
    const contact = document.getElementById("contact").value;

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

    // Clear the form (optional)
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
