// === SHOPPING CART FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", () => {
  const cartKey = "bookHavenCart";
  let cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];

  // Inject cart modal into page (if you have a createCartModal function)
  if (typeof createCartModal === "function") {
    const cartModal = createCartModal();
    document.body.appendChild(cartModal);
  }

  // Add to Cart buttons
  document.querySelectorAll(".gallery-category").forEach((item) => {
    const button = item.querySelector("button");
    const title = item.querySelector("h3").innerText;

    button.addEventListener("click", () => {
      cartItems.push(title);
      localStorage.setItem(cartKey, JSON.stringify(cartItems));
      alert(`Added "${title}" to cart.`);
    });
  });

  // Show Cart modal
  const viewCartBtn = document.querySelector(".gallery-button-container button");
  const modal = document.getElementById("cart-modal");

  viewCartBtn.addEventListener("click", () => {
    updateCartDisplay();
    modal.style.display = "flex";
  });

  // Close Cart modal
  document.getElementById("close-cart-modal").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Clear Cart
  document.getElementById("clear-cart").addEventListener("click", () => {
    if (cartItems.length) {
      cartItems = [];
      localStorage.removeItem(cartKey);
      updateCartDisplay();
      alert("Cart is cleared!");
    } else {
      alert("Cart is already empty.");
    }
    modal.style.display = "none";
  });

  // Process Order
  document.getElementById("process-order").addEventListener("click", () => {
    if (cartItems.length) {
      alert("Thank you for your order!");
      cartItems = [];
      localStorage.removeItem(cartKey);
      updateCartDisplay();
    } else {
      alert("Cart is empty.");
    }
    modal.style.display = "none";
  });

  // Refresh cart modal content
  function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];

    if (cartItems.length === 0) {
      const li = document.createElement("li");
      li.innerText = "Your cart is empty.";
      cartList.appendChild(li);
    } else {
      cartItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
      });
    }
  }
});

// === Contact Form Logic ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const clearBtn = document.getElementById("clear-btn");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name && email) {
        alert(`Thank you for your message, ${name}!`);
        form.reset();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      form.reset();
    });
  }
});

// === Newsletter Subscription Logic ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = document.getElementById("email");

      if (emailInput) {
        alert(`Thank you for subscribing!`);
      } else {
        alert("Email input not found.");
      }
    });
  }
});
