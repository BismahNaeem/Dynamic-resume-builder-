document.addEventListener("DOMContentLoaded", function () {
    // Get elements from the DOM
    var nameInput = document.getElementById("name");
    var contactInput = document.getElementById("contact");
    var emailInput = document.getElementById("email");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var generateButton = document.getElementById("generate-resume");
    var generatedResume = document.getElementById("generated-resume");
    // Function to show error message
    var showError = function (input, message) {
        var _a;
        var errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.innerText = message;
        (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(errorElement);
    };
    // Function to clear error messages
    var clearErrors = function () {
        var errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function (error) { return error.remove(); });
    };
    // Add event listener to the Generate Resume button
    generateButton.addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Clear previous error messages
        clearErrors();
        // Get user inputs
        var name = nameInput.value.trim();
        var contact = contactInput.value.trim();
        var email = emailInput.value.trim();
        var skills = skillsInput.value.trim();
        var experience = experienceInput.value.trim();
        // Validate inputs
        var isValid = true;
        if (!name) {
            showError(nameInput, "Please fill in your name.");
            isValid = false;
        }
        if (!contact) {
            showError(contactInput, "Please fill in your contact.");
            isValid = false;
        }
        if (!email) {
            showError(emailInput, "Please fill in your email.");
            isValid = false;
        }
        if (!skills) {
            showError(skillsInput, "Please fill in your skills.");
            isValid = false;
        }
        if (!experience) {
            showError(experienceInput, "Please fill in your work experience.");
            isValid = false;
        }
        if (!isValid) {
            return;
        }
        // Create dynamic resume content with inline styling
        var resumeContent = "\n        <div style=\"\n          background-color: #f0f8ff; \n          padding: 20px; \n          border-radius: 8px; \n          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \n          border-left: 6px solid #007BFF; \n          margin-top: 20px;\n        \">\n          <h2 style=\"color: #007BFF; text-align: center;\">Generated Resume</h2>\n          <p style=\"margin: 10px 0; font-weight: bold;\"><strong>Name:</strong> ".concat(name, "</p>\n          <p style=\"margin: 10px 0;\"><strong>Contact:</strong> ").concat(contact, "</p>\n          <p style=\"margin: 10px 0;\"><strong>Email:</strong> ").concat(email, "</p>\n          <p style=\"margin: 10px 0;\"><strong>Skills:</strong> ").concat(skills, "</p>\n          <p style=\"margin: 10px 0;\"><strong>Work Experience:</strong> ").concat(experience, "</p>\n        </div>\n      ");
        // Insert the generated resume content into the DOM
        generatedResume.innerHTML = resumeContent;
    });
});
