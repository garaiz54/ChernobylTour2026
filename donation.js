document.getElementById("donationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("donationStatus").textContent = "Thank you! This was a demo; no payment was processed.";
  event.target.reset();
});
