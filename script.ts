// Function to handle form submission
function generateResume(event: Event): void {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get user input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Generate resume content
    const resumeContent = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
    `;

    // Display resume content
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    resumeOutput.innerHTML = resumeContent;
}

// Attach event listener to form
document.getElementById('resumeForm')?.addEventListener('submit', generateResume);
      