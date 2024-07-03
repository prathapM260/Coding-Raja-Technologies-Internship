function addNewField() {
    console.log("New field added");

    // Create new textarea element
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("placeholder", "Enter your experience");
    newNode.setAttribute("rows", 4);

    // Find the container where the new textarea will be added
    let weContainer = document.getElementById("weAdditional");

    // Insert the new textarea before the button in the container
    weContainer.insertBefore(newNode, weContainer.children[0]);
}

function addNewAcField() {
    console.log("New academic information field added");

    // Create new textarea element
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aeField", "mt-2");
    newNode.setAttribute("placeholder", "Enter your academic information");
    newNode.setAttribute("rows", 4);

    // Find the container where the new textarea will be added
    let aeContainer = document.getElementById("aeAdditional");

    // Insert the new textarea before the button in the container
    aeContainer.insertBefore(newNode, aeContainer.children[0]);
}



function generateCv() {
    // Personal Information
    document.getElementById('nameT1').innerText = document.getElementById('nameField').value;
    document.getElementById('nameT2').innerText = document.getElementById('nameField').value;
    document.getElementById('contactT').innerText = document.getElementById('contactField').value;
    document.getElementById('addressT').innerText = document.getElementById('addressField').value;

    document.getElementById('fbT').innerText = document.getElementById('facebookField').value;
    document.getElementById('fbT').href = document.getElementById('facebookField').value;

    document.getElementById('instaT').innerText = document.getElementById('instagramField').value;
    document.getElementById('instaT').href = document.getElementById('instagramField').value;

    document.getElementById('linkedinT').innerText = document.getElementById('linkedinField').value;
    document.getElementById('linkedinT').href = document.getElementById('linkedinField').value;

    // Skills
    let skills = document.getElementById('skillsField').value;
    let skillsArray = skills.split('\n');
    let skillsHtml = '';
    skillsArray.forEach(skill => {
        if (skill.trim() !== '') {
            skillsHtml += `<li>${skill.trim()}</li>`;
        }
    });
    document.getElementById('skillsT').innerHTML = skillsHtml;

    // Education
    let education = document.getElementById('educationField').value;
    let educationArray = education.split('\n');
    let educationHtml = '';
    educationArray.forEach(edu => {
        if (edu.trim() !== '') {
            educationHtml += `<li>${edu.trim()}</li>`;
        }
    });
    document.getElementById('educationT').innerHTML = educationHtml;

    // Projects
    let projects = document.getElementById('projectsField').value;
    let projectsArray = projects.split('\n');
    let projectsHtml = '';
    projectsArray.forEach(project => {
        if (project.trim() !== '') {
            projectsHtml += `<li>${project.trim()}</li>`;
        }
    });
    document.getElementById('projectsT').innerHTML = projectsHtml;

    // Experience
    let weFields = document.getElementsByClassName('weField');
    let experienceHtml = '';
    for (let field of weFields) {
        if (field.value.trim() !== '') {
            experienceHtml += `<li>${field.value.trim()}</li>`;
        }
    }
    document.getElementById('weT').innerHTML = experienceHtml;

    // Additional Information
    let aeFields = document.getElementsByClassName('aeField');
    let additionalHtml = '';
    for (let field of aeFields) {
        if (field.value.trim() !== '') {
            additionalHtml += `<li>${field.value.trim()}</li>`;
        }
    }
    document.getElementById('aqT').innerHTML = additionalHtml;
}