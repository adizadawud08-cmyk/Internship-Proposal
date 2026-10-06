// Select the form
const employeeForm = document.querySelector("#employeeForm");

// Select the employee list
const employeeList = document.querySelector("#employeeList");

// Select the message area
const message = document.querySelector("#message");


// Listen for form submission
employeeForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const role = document.querySelector("#role").value.trim();


    // Basic validation
    if (name === "" || email === "" || role === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }


    // Create a new employee card
    const employeeCard = document.createElement("div");

    // Add a class using JavaScript
    employeeCard.classList.add("employee-card");


    // Add employee information
    employeeCard.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Role: ${role}</p>
        <button class="deleteBtn">Delete</button>
    `;


    // Add the card to the page
    employeeList.appendChild(employeeCard);


    // Find the delete button
    const deleteButton = employeeCard.querySelector(".deleteBtn");


    // Delete the employee card when clicked
    deleteButton.addEventListener("click", function() {
        employeeCard.remove();
    });


    // Clear the form
    employeeForm.reset();

    // Clear the message
    message.textContent = "";
});