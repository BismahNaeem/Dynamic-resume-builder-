document.addEventListener("DOMContentLoaded", () => {
    // Get elements from the DOM
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const contactInput = document.getElementById("contact") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const generateButton = document.getElementById("generate-resume") as HTMLButtonElement;
    const generatedResume = document.getElementById("generated-resume") as HTMLDivElement;
  
    // Function to show error message
    const showError = (input: HTMLInputElement | HTMLTextAreaElement, message: string) => {
      const errorElement = document.createElement("div");
      errorElement.className = "error-message";
      errorElement.innerText = message;
      input.parentElement?.appendChild(errorElement);
    };
  
    // Function to clear error messages
    const clearErrors = () => {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((error) => error.remove());
    };
  
    // Add event listener to the Generate Resume button
    generateButton.addEventListener("click", (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Clear previous error messages
      clearErrors();
  
      // Get user inputs
      const name = nameInput.value.trim();
      const contact = contactInput.value.trim();
      const email = emailInput.value.trim();
      const skills = skillsInput.value.trim();
      const experience = experienceInput.value.trim();
  
      // Validate inputs
      let isValid = true;
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
  
    //   // Create dynamic resume content with inline styling
     const resumeContent = `
    //     <div style="
    //       background-color: #f0f8ff; 
    //       padding: 20px; 
    //       border-radius: 8px; 
    //       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    //       border-left: 6px solid #0d3764; 
    //       margin-top: 20px;
    //     ">
    //       <h2 style="color: #007BFF; text-align: center;">Generated Resume</h2>
    //       <p style="margin: 10px 0; font-weight: bold;"><strong>Name:</strong> ${name}</p>
    //       <p style="margin: 10px 0;"><strong>Contact:</strong> ${contact}</p>
    //       <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
    //       <p style="margin: 10px 0;"><strong>Skills:</strong> ${skills}</p>
    //       <p style="margin: 10px 0;"><strong>Work Experience:</strong> ${experience}</p>
    //     </div>
    //   `;
  
      // Insert the generated resume content into the DOM
      generatedResume.innerHTML = resumeContent;
    });
  });
  
