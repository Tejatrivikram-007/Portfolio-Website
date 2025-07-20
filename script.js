// -------------------------<< PROJECTS >>--------------------------
const projects = [
    {
        title: "Portfolio Website",
        image: "./assets/images/portfolio.png",  
        description: "A personal portfolio website to showcase my skills and projects with responsive design and interactive elements.",
        link: "https://github.com/Tejatrivikram-007/Portfolio-Website",
        tags: ["HTML", "CSS", "JavaScript"],
        liveDemo: "https://portfolio-tejatrivikramv.netlify.app/"
    },
   
    {
        title: "E-commerce Website",
        image: "./assets/images/ecommerce.png",
        description: "Interactive e-commerce platform with product catalog, shopping cart, and checkout functionality.",
        link: "https://github.com/Tejatrivikram-007/Shopping-cart",
        tags: ["React", "HTML", "CSS"],
        liveDemo: "https://click-n-cart.netlify.app/"
    },
    {
        title: "Gym Management System",
        image: "./assets/images/gym.png",
        description: "A comprehensive gym management web application with member tracking, workout planning, and payment integration.",
        link: "https://github.com/Tejatrivikram-007/Gym_webpage",
        tags: ["HTML", "CSS"],
        liveDemo: "https://cleanmindfitness.netlify.app/",
    },
    {
        title: "Cafe Website",
        image: "./assets/images/cafe.png",
        description: "Responsive website for a local cafe with online ordering system and reservation functionality.",
        link: "https://github.com/Tejatrivikram-007/Cafe-Website",
        tags: ["HTML", "CSS", "JavaScript"],
        liveDemo: "https://coffeebrewhaven.netlify.app/"
    },
    {
        title: "Personal Finance Tracker",
        image: "./assets/images/Screenshot 2025-03-25 091639.png",  
        description: "Full-stack application for tracking personal finances with expense categorization and visual analytics.",
        link: "https://github.com/Tejatrivikram-007/Personal-Finance-Tracker",
        tags: ["Python", "Django", "PostgreSQL"],
        liveDemo: "https://personal-finance-trackerf.onrender.com/"
    },
    {
        title: "Expense Sharing App",
        image: "./assets/images/splitwise.png",
        description: "Splitwise clone for managing shared expenses among groups with debt calculation and notifications.",
        link: "https://github.com/Tejatrivikram-007/splitwise_clone_backend",
        tags: ["Python", "FastAPI", "React"],
        liveDemo: "#"
    },
    
    {
        title: "Task Management App",
        image: "./assets/images/todo.webp",
        description: "Productivity application for task management with drag-and-drop interface and due date reminders.",
        link: "https://github.com/Tejatrivikram-007/To-Do-List",
        tags: ["React", "Local Storage", "CSS"],
        liveDemo: "#"
    },
    
    {
        title: "Course Management System",
        image: "./assets/images/course.webp",
        description: "Educational platform for course enrollment, progress tracking, and certification.",
        link: "https://github.com/Tejatrivikram-007/Course-Management-System",
        tags: ["React", "REST API", "CSS"],
        liveDemo: "#"
    },
    {
        title: "Coffee Shop Site",
        image: "./assets/images/coffee.png",
        description: "E-commerce site for artisanal coffee products with subscription options and gift cards.",
        link: "https://github.com/Tejatrivikram-007/Cozzy-Beans",
        tags: ["Bootstrap", "JavaScript", "CSS"],
        liveDemo: "#"
    },
    
];


function displayProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projects.forEach((project, index) => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-card");
        
        projectElement.setAttribute("data-aos", "fade-up");
        projectElement.setAttribute("data-aos-delay", `${index * 100}`);
        
        // Image container
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("project-image-container");
        
        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.title;
        image.classList.add("project-image");
        image.loading = "lazy";
        
        const overlay = document.createElement("div");
        overlay.classList.add("project-overlay");
        
        // Only show preview button if live demo exists
        if (project.liveDemo && project.liveDemo !== '#') {
            const previewButton = document.createElement("a");
            previewButton.href = project.liveDemo;
            previewButton.target = "_blank";
            previewButton.classList.add("preview-button");
            previewButton.innerHTML = '<i class="fas fa-eye"></i> Quick Preview';
            overlay.appendChild(previewButton);
        }
        
        imageContainer.appendChild(image);
        imageContainer.appendChild(overlay);
        
        // Content container
        const content = document.createElement("div");
        content.classList.add("project-content");
        
        // Title
        const title = document.createElement("h3");
        title.textContent = project.title;
        title.classList.add("project-title");
        
        // Description
        const description = document.createElement("p");
        description.textContent = project.description;
        description.classList.add("project-description");
        
        // Tags container
        const tagsContainer = document.createElement("div");
        tagsContainer.classList.add("project-tags");
        
        project.tags.forEach(tag => {
            const tagElement = document.createElement("span");
            tagElement.classList.add("project-tag");
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        // Links container
        const linksContainer = document.createElement("div");
        linksContainer.classList.add("project-links");
        
        // GitHub link (always shown)
        const githubLink = document.createElement("a");
        githubLink.href = project.link;
        githubLink.target = "_blank";
        githubLink.classList.add("project-link", "code-link");
        githubLink.innerHTML = '<i class="fab fa-github"></i> Source Code';
        
        linksContainer.appendChild(githubLink);
        
        // Only add Live Demo button if available
        if (project.liveDemo && project.liveDemo !== '#') {
            const demoLink = document.createElement("a");
            demoLink.href = project.liveDemo;
            demoLink.target = "_blank";
            demoLink.classList.add("project-link", "demo-link");
            demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Visit';
            linksContainer.appendChild(demoLink);
        }
        
        // Append all elements to content
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(tagsContainer);
        content.appendChild(linksContainer);
        
        // Append image and content to project element
        projectElement.appendChild(imageContainer);
        projectElement.appendChild(content);
        
        container.appendChild(projectElement);
    });
}

window.addEventListener('DOMContentLoaded', displayProjects);

// --------------------<< EDUCATION >>--------------------------
const education = [
    {
        degree: "Bachelor of Technology in Electrical and Electronics Engineering",
        institution: "University of PRIST",
        per: "62",
        description: "Studied various aspects of Electrical and Electronics Engineering, including circuit design, control systems, power systems, microelectronics, and signal processing. Gained hands-on experience with embedded systems, automation, and electrical machines, while also learning key principles of digital electronics and power electronics."
    },
    {
        degree: "Diploma of Technology in Electrical and Electronics Engineering",
        institution: "GIET",
        per: "72",
        description: "Studied core concepts of Electrical and Electronics Engineering, including circuit analysis, electrical machines, control systems, and power distribution. Gained practical skills in troubleshooting, circuit design, and the application of digital electronics. Developed proficiency in using tools for electrical measurements and automation systems, alongside learning about microcontrollers and basic power systems."
    },
    {
        degree: "Higher Secondary School Certificate",
        institution: "A.M.G Residential High School",
        per: "83",
        description: "Studied a range of subjects including Physics, Chemistry, Mathematics, and English, Developed strong foundational knowledge in these subjects, with a focus on problem-solving and analytical thinking. "
    }
];
// This function dynamically generates and displays the education section
function displayEducation() {
    const educationContainer = document.querySelector('#education-container');
    
    education.forEach(item => {
        const educationElement = document.createElement('div');
        educationElement.classList.add('education');

        educationElement.innerHTML = `
            <h3>${item.degree}</h3>
            <p><strong>${item.institution}</strong> - ${item.per}%</p>
            <p>${item.description}</p>
        `;

        educationContainer.appendChild(educationElement);
        
    });
}

// ---------------- <<< onload function for both education and projects >>>-------------
window.onload = function() {    //to display the cards onload function
    
    displayProjects(); // Call to display projects and log the update
    displayEducation();

};

// -------------------<< SKILLS >>--------------------------

const skills = [
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    // { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Jira", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { 
        name: "GitHub", 
        img: "./assets/images/github.jpg",
    },
    // { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
];

const skillContainer = document.getElementById("skillContainer");

skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const img = document.createElement("img");
    img.src = skill.img;
    img.alt = skill.name;
    img.classList.add("img");

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = skill.name;

    skillDiv.appendChild(img);
    skillDiv.appendChild(tooltip);
    skillContainer.appendChild(skillDiv);
});

// ---------------<< Contact me >>------------  ----
document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert("Thank you for contacting me, " + name + ". We'll get back to you soon!");
    document.getElementById('contact_form').reset();
});












