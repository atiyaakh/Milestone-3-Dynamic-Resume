// get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var qualification = document.getElementById('Qualification').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // generate the resume content dynamically
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information </h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(qualification, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(Skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is mission.');
    }
});
