document.addEventListener("DOMContentLoaded", () => {
    // Payment method selection
    const paymentButtons = document.querySelectorAll(".payment-btn");
    let selectedMethod = null;
  
    paymentButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Highlight selected button
        paymentButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        selectedMethod = button.getAttribute("data-method");
        alert(`Payment method selected: ${selectedMethod}`);
      });
    });
  
    // Form submission
    const submitBtn = document.getElementById("place-order-btn");
    submitBtn.addEventListener("click", () => {
      alert("Order placed successfully! Thank you for shopping.");
    });
  });
  