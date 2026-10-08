// Classroom customer-array exercise. Never include the password in the array.
const customers = [];
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const customer = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim()
  };
  customers.push(customer);
  console.clear();
  console.log(customers);
  document.getElementById("signupStatus").textContent = "Demo submitted. Open the browser console to view the customer array.";
  event.target.reset();
});
