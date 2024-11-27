document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const fatherNameInput = document.getElementById("father-name") as HTMLInputElement;
  const contactInput = document.getElementById("contact") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const educationInput = document.getElementById("education") as HTMLInputElement;
  const addressInput = document.getElementById("address") as HTMLTextAreaElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
  const generateButton = document.getElementById("generate-resume") as HTMLButtonElement;
  const generatedResume = document.getElementById("generated-resume") as HTMLDivElement;

  const showError = (input: HTMLInputElement | HTMLTextAreaElement, message: string) => {
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.innerText = message;
    input.parentElement?.appendChild(errorElement);
  };

  const clearErrors = () => {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());
  };

  generateButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const fatherName = fatherNameInput.value.trim();
    const contact = contactInput.value.trim();
    const email = emailInput.value.trim();
    const education = educationInput.value.trim();
    const address = addressInput.value.trim();
    const skills = skillsInput.value.trim();
    const experience = experienceInput.value.trim();

    let isValid = true;
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

    if (!isValid) return;

    const resumeContent = `
      <div style="
        background-color: #f0f8ff; 
        padding: 20px; 
        border-radius: 8px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        margin-top: 20px;
      ">
        <h2 style="color: #007BFF; text-align: center;">Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Work Experience:</strong> ${experience}</p>
      </div>
    `;

    generatedResume.innerHTML = resumeContent;
  });
});