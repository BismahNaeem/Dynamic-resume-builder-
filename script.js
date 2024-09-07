var _a;
// Function to handle form submission
function generateResume(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    // Generate resume content
    var resumeContent = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Experience:</strong></p>\n        <p>").concat(experience, "</p>\n    ");
    // Display resume content
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeContent;
}
// Attach event listener to form
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', generateResume);
