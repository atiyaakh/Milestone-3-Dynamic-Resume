// get reference to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const qualification = (document.getElementById('Qualification') as HTMLInputElement).value
    const Experience = (document.getElementById('Experience') as HTMLInputElement).value
    const Skills = (document.getElementById('Skills') as HTMLInputElement).value

    // generate the resume content dynamically

    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information </h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${qualification}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>

    <h3>Skills</h3>
    <p>${Skills}</p>
    `;
    // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;

    }else{
        console.error('The resume display element is mission.');
    }


})
