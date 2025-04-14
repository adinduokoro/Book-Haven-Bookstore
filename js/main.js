// === SHOPPING CART FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", () => {
  const cartKey = "bookHavenCart";
  let cartItems = JSON.parse(sessionStorage.getItem(cartKey)) || [];

  // Add to Cart buttons
  document.querySelectorAll(".gallery-category").forEach((item) => {
    const button = item.querySelector("button");
    const title = item.querySelector("h3").innerText;

    button.addEventListener("click", () => {
      cartItems.push(title);
      sessionStorage.setItem(cartKey, JSON.stringify(cartItems));
      alert(`Added "${title}" to cart.`);
    });
  });

  // Show Cart modal
  const viewCartBtn = document.querySelector(
    ".gallery-button-container button"
  );
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
      sessionStorage.removeItem(cartKey);
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
      sessionStorage.removeItem(cartKey);
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

    cartItems = JSON.parse(sessionStorage.getItem(cartKey)) || [];

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
// === Contact Form Logic with localStorage ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const clearBtn = document.getElementById("clear-btn");
  const fields = ["name", "email", "number", "message", "custom-order"];

  // Prefill form fields from localStorage
  function prefillForm() {
    fields.forEach((field) => {
      const el = document.getElementById(field);
      const saved = localStorage.getItem(`contactForm-${field}`);

      if (el && saved !== null) {
        if (el.type === "checkbox") {
          el.checked = saved === "true";
        } else {
          el.value = saved;
        }
      }
    });
  }

  prefillForm(); // Run on page load

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name && email) {
        // Save all field values
        fields.forEach((field) => {
          const el = document.getElementById(field);
          const value =
            el.type === "checkbox" ? el.checked.toString() : el.value.trim();
          localStorage.setItem(`contactForm-${field}`, value);
        });

        alert(`Thank you for your message, ${name}!`);
        form.reset();

        // Refill the form after reset
        prefillForm();
      } else {
        alert("Please fill out required fields.");
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      form.reset();
      fields.forEach((field) => {
        localStorage.removeItem(`contactForm-${field}`);
      });
    });
  }
});

// === Newsletter Subscription Logic ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const clearBtn = document.getElementById("clear-btn");

  const fields = ["name", "email", "number", "message", "custom-order"];

  // Populate form with saved data
  fields.forEach((field) => {
    const el = document.getElementById(field);
    const saved = localStorage.getItem(`contactForm-${field}`);

    if (el && saved !== null) {
      if (el.type === "checkbox") {
        el.checked = saved === "true";
      } else {
        el.value = saved;
      }
    }
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name && email) {
        // Save all field values
        fields.forEach((field) => {
          const el = document.getElementById(field);
          const value =
            el.type === "checkbox" ? el.checked.toString() : el.value.trim();
          localStorage.setItem(`contactForm-${field}`, value);
        });

        alert(`Thank you for your message, ${name}!`);
        form.reset();
      } else {
        alert("Please fill out required fields.");
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      form.reset();
      // Clear saved data
      fields.forEach((field) => {
        localStorage.removeItem(`contactForm-${field}`);
      });
    });
  }
});
