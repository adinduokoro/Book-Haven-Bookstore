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
