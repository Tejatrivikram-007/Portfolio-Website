// -------------------------<< PROJECTS >>--------------------------11
const projects = [
    {
        title: "Portfolio Website",
        image: "./assets/images/portfolio.png",  
        description: "A personal portfolio website to showcase my skills and projects.",
        link:"https://www.google.com"
    },
    {
        title: "E-commerce Website",
        image: "./assets/images/ecommerce.png",
        description: "An online store platform with a user-friendly interface and payment integration."
    },
    {
        title: "Weather App",
        image: "./assets/images/weather.png",
        description: "A weather application that fetches data from a weather API and displays real-time weather information."
    },
    {
        title: "To DO List",
        image: "./assets/images/todo.webp",
        description: "A to-do application that allows users to add, edit, and delete tasks."
    },
    {
        title: "Cafe Website",
        image: "./assets/images/cafe.png",
        description: "A Cafe Website platform built with HTML, CSS, and JavaScript to sell products online and book appointments."
    },
    {
        title: "Coffee Website",
        image: "./assets/images/coffee.png",
        description: "A Coffee Website platform built with HTML, CSS, and JavaScript to sell products online and book appointments."
    },
    {
        title: "Qspider's Website",
        image: "./assets/images/qspiders.png",
        description: "This Qspider's Website provides details of courses and trainer's details."
    },
    {
        title: "Course management system",
        image: "./assets/images/course.webp",
        description: "The Course management system provides details of courses and trainers."
    },
    {
        title: "Adventure Bikes",
        image: "./assets/images/adventure bike.webp",
        description: "The Adventure Bikes website provides details of bikes under 350CC in india."
    },
   
    
];

let currentIndex = 0;  // Start from the first project

const container = document.getElementById("carousel-container");

function updateCarousel() {
    console.log('Updating carousel...');

    container.innerHTML = "";

    projects.forEach((project, index) => {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("carousel-item");

        const imgElement = document.createElement("img");
        imgElement.src = project.image;
        imgWrapper.appendChild(imgElement);

        const scale = (index === currentIndex) ? 1.1 : 0.9;  // Apply scaling effect
        const opacity = (index === currentIndex) ? 1 : 0.5; // Adjust opacity

        imgWrapper.style.opacity = opacity;
        imgWrapper.style.transform = `scale(${scale})`; // Apply scale transform

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = project.title;

        const desc = document.createElement("div");
        desc.classList.add("description");
        desc.textContent = project.description;

        infoDiv.appendChild(title);
        infoDiv.appendChild(desc);
        imgWrapper.appendChild(infoDiv);


        container.appendChild(imgWrapper);
    });

    // Apply the translateX transformation based on screen size dynamically
    const carouselWidth = container.offsetWidth;
    const itemWidth = document.querySelector(".carousel-item").offsetWidth; 
    const translateXValue = (currentIndex * itemWidth);

    container.style.transform = `translateX(-${translateXValue}px)`;
}

// Call updateCarousel initially to populate the carousel with the first set of projects
updateCarousel();

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
});

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
    
    updateCarousel(); // Call to display projects and log the update
    displayEducation();

};

// -------------------<< SKILLS >>--------------------------

const skills = [
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
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
