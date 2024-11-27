document.addEventListener("DOMContentLoaded", function () {
    var nameInput = document.getElementById("name");
    var fatherNameInput = document.getElementById("father-name");
    var contactInput = document.getElementById("contact");
    var emailInput = document.getElementById("email");
    var educationInput = document.getElementById("education");
    var addressInput = document.getElementById("address");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var generateButton = document.getElementById("generate-resume");
    var generatedResume = document.getElementById("generated-resume");
    var showError = function (input, message) {
        var _a;
        var errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.innerText = message;
        (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(errorElement);
    };
    var clearErrors = function () {
        var errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function (error) { return error.remove(); });
    };
    generateButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearErrors();
        var name = nameInput.value.trim();
        var fatherName = fatherNameInput.value.trim();
        var contact = contactInput.value.trim();
        var email = emailInput.value.trim();
        var education = educationInput.value.trim();
        var address = addressInput.value.trim();
        var skills = skillsInput.value.trim();
        var experience = experienceInput.value.trim();
        var isValid = true;
        if (!name) {
            showError(nameInput, "Please fill in your name.");
            isValid = false;
        }
        if (!fatherName) {
            showError(fatherNameInput, "Please fill in your father's name.");
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
        if (!education) {
            showError(educationInput, "Please fill in your education.");
            isValid = false;
        }
        if (!address) {
            showError(addressInput, "Please fill in your address.");
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
        if (!isValid)
            return;
        var resumeContent = "\n      <div style=\"\n        background-color: #f0f8ff; \n        padding: 20px; \n        border-radius: 8px; \n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \n        margin-top: 20px;\n      \">\n        <h2 style=\"color: #007BFF; text-align: center;\">Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Father's Name:</strong> ").concat(fatherName, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Work Experience:</strong> ").concat(experience, "</p>\n      </div>\n    ");
        generatedResume.innerHTML = resumeContent;
        // Display the entered data in the input fields
        nameInput.value = name;
        fatherNameInput.value = fatherName;
        contactInput.value = contact;
        emailInput.value = email;
        educationInput.value = education;
        addressInput.value = address;
        skillsInput.value = skills;
        experienceInput.value = experience;
    });
});
