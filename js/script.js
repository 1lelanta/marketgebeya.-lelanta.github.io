// Change quantity functionality
function changeQuantity(amount) {
    let quantityDisplay = document.getElementById("quantity-display");
    let quantity = parseInt(quantityDisplay.textContent);
  
    // Update quantity based on button click (+ or -)
    quantity += amount;
  
    // Prevent quantity from going below 1
    if (quantity < 1) {
      quantity = 1;
    }
  
    // Update the displayed quantity
    quantityDisplay.textContent = quantity;
  }
  
  // Tab switching functionality
  function showTab(tabName) {
    const tabs = document.querySelectorAll(".tab-panel");
    const buttons = document.querySelectorAll(".tab-btn");
    
    // Hide all tabs
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
  
    // Remove active class from all buttons
    buttons.forEach(button => {
      button.classList.remove("active");
    });
  
    // Show the selected tab
    document.getElementById(tabName).classList.add("active");
  
    // Add active class to the selected button
    document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`).classList.add("active");
  }
  
  // Add to cart functionality (simulated)
  function addToCart() {
    // For simplicity, let's just log to the console and update cart count
    let cartCount = parseInt(document.getElementById("cart-icon-count").textContent);
    cartCount += parseInt(document.getElementById("quantity-display").textContent);
  
    // Update cart count in the cart icon
    document.getElementById("cart-icon-count").textContent = cartCount;
  
    // Show success message or some indication
    alert("Item added to cart!");
  }
  
  // Event listener for Add to Cart button
  document.querySelector(".add-to-cart").addEventListener("click", addToCart);
  