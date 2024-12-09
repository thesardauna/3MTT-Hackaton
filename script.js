const jobRoles = [
  {
    "Job Role": "AI/Machine Learning",
    "Soft Skills": "Analytical thinking, continuous learning, Collaboration, adaptability",
    "Technical Skills": "Machine Learning Algorithms (30%), Python (25%), TensorFlow (20%), Data Analysis (15%), Neural Networks (5%), NLP (5%)",
    "Interests": "Building intelligent systems, staying updated with AI advancements",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disturbances"
  },
  {
    "Job Role": "Animation",
    "Soft Skills": "Creativity, patience, Collaboration, storytelling",
    "Technical Skills": "Adobe After Effects (35%), Maya (30%), 3D Modeling (20%), Motion Graphics (15%)",
    "Interests": "Creating animations, teamwork",
    "Health Issues": "Eye strain, hand strain, repetitive strain injuries"
  },
  {
    "Job Role": "Backend Engineer",
    "Soft Skills": "Analytical thinking, problem-solving, Collaboration, continuous learning",
    "Technical Skills": "Python (30%), Java (25%), SQL (20%), API Development (15%), Cloud Computing (10%)",
    "Interests": "Designing server-side logic, teamwork",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disorders"
  },
  {
    "Job Role": "Business Intelligence Analyst",
    "Soft Skills": "Analytical thinking, data-driven, Collaboration, communication",
    "Technical Skills": "Data Visualization (30%), SQL (25%), Reporting Tools (20%), Data Warehousing (15%), ETL Tools (10%)",
    "Interests": "Providing business insights, enabling data-driven decisions",
    "Health Issues": "Eye strain, sleep disorders, repetitive strain injuries"
  },
  {
    "Job Role": "Cloud Computing",
    "Soft Skills": "Analytical thinking, cloud expertise, Teamwork, adaptability",
    "Technical Skills": "AWS (20%), Azure (20%), GCP (20%), Networking (15%), Security (15%), Automation (10%)",
    "Interests": "Designing and managing cloud infrastructure, keeping up with tech innovations",
    "Health Issues": "Stress, anxiety, sleep disturbances"
  },
  {
    "Job Role": "Cybersecurity Analyst",
    "Soft Skills": "Problem-solving, risk management, Collaboration, communication",
    "Technical Skills": "Security Tools (30%), Threat Intelligence (25%), Network Protocols (20%), Risk Management (15%), Firewalls (10%)",
    "Interests": "Protecting systems, analyzing threats",
    "Health Issues": "Stress, anxiety, sleep disorders"
  },
  {
    "Job Role": "Data Analyst",
    "Soft Skills": "Analytical thinking, problem-solving, Collaboration, communication",
    "Technical Skills": "Data Visualization (35%), SQL (25%), Excel (20%), Data Mining (10%), Reporting Tools (10%)",
    "Interests": "Analyzing data, providing actionable insights",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disorders"
  },
  {
    "Job Role": "Data Engineer",
    "Soft Skills": "Problem-solving, attention to detail, Collaboration",
    "Technical Skills": "Data Warehousing (25%), SQL (25%), Python (20%), Big Data Tools (15%), Data Pipelines (10%), Cloud Computing (5%)",
    "Interests": "Building scalable data pipelines, ensuring data quality",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disorders"
  },
  {
    "Job Role": "Data Scientist",
    "Soft Skills": "Curiosity, problem-solving, Collaboration, creativity",
    "Technical Skills": "Python (25%), R (20%), Statistical Analysis (15%), Machine Learning (20%), Data Visualization (10%), Big Data Tools (5%), NLP (5%)",
    "Interests": "Building predictive models, solving complex problems",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disorders"
  },
  {
    "Job Role": "DevOps",
    "Soft Skills": "Collaboration, multitasking, Teamwork, adaptability",
    "Technical Skills": "CI/CD Tools (25%), Cloud Computing (20%), Scripting Languages (Python, Ruby) (15%), Containers (Docker, Kubernetes) (15%), Automation Tools (15%), Infrastructure as Code (10%)",
    "Interests": "Automating processes, collaboration",
    "Health Issues": "Eye strain, stress, sleep disorders"
  },
  {
    "Job Role": "Ethical Hacker",
    "Soft Skills": "Analytical thinking, security expertise, Continuous learning, problem-solving",
    "Technical Skills": "Penetration Testing (35%), Network Security (30%), Vulnerability Assessment (20%), Security Tools (10%), Risk Management (5%)",
    "Interests": "Identifying vulnerabilities, improving security",
    "Health Issues": "Stress, anxiety, sleep disorders"
  },
  {
    "Job Role": "Frontend Engineer",
    "Soft Skills": "Creativity, problem-solving, Collaboration, communication",
    "Technical Skills": "HTML (25%), CSS (25%), JavaScript (30%), React (10%), Angular (5%), UI Design (5%)",
    "Interests": "Designing user interfaces, enhancing user experience",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disorders"
  },
  {
    "Job Role": "Full-Stack Developer",
    "Soft Skills": "Problem-solving, adaptability, Collaboration",
    "Technical Skills": "Frontend Languages (HTML, CSS, JavaScript) (25%), Backend Languages (Node.js, Python) (25%), Frameworks (React, Angular, Django) (25%), Databases (15%), Cloud Computing (10%)",
    "Interests": "Building and maintaining applications, learning new technologies",
    "Health Issues": "Eye strain, sleep disorders, repetitive strain injuries"
  },
  {
    "Job Role": "Game Developer",
    "Soft Skills": "Creativity, problem-solving, Collaboration",
    "Technical Skills": "Unity (30%), Unreal Engine (25%), C++ (20%), 3D Modeling (15%), Animation (10%)",
    "Interests": "Creating immersive experiences, teamwork",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disorders"
  },
  {
    "Job Role": "Information Security Analyst",
    "Soft Skills": "Problem-solving, risk management, Collaboration, communication",
    "Technical Skills": "Security Policies (30%), Compliance (20%), Threat Intelligence (20%), Network Security (20%), Risk Management (10%)",
    "Interests": "Protecting information, analyzing risks",
    "Health Issues": "Stress, anxiety, sleep disorders"
  },
  {
    "Job Role": "Machine Learning Engineer",
    "Soft Skills": "Analytical thinking, machine learning expertise, Collaboration, adaptability",
    "Technical Skills": "Python (35%), Data Analysis (25%), Machine Learning (25%), TensorFlow (10%), Data Visualization (5%)",
    "Interests": "Building and optimizing machine learning models",
    "Health Issues": "Eye strain, repetitive strain injuries, sleep disorders"
  },
  {
    "Job Role": "Product Designer",
    "Soft Skills": "Creativity, problem-solving, User Testing, empathy",
    "Technical Skills": "Sketch (30%), Figma (30%), Adobe XD (20%), Prototyping (20%)",
    "Interests": "Designing user-friendly products, focusing on usability",
    "Health Issues": "Eye strain, repetitive strain injuries"
  },
  {
    "Job Role": "Product Manager",
    "Soft Skills": "Leadership, empathy, Decision-making",
    "Technical Skills": "Market Analysis (30%), Roadmap Planning (25%), Project Management (20%), Data Analysis (15%), Communication (10%)",
    "Interests": "Managing product lifecycle, aligning teams",
    "Health Issues": "Stress, decision fatigue, burnout"
  },
  {
    "Job Role": "Security Engineer",
    "Soft Skills": "Problem-solving, technical expertise, Collaboration",
    "Technical Skills": "Security Tools (30%), Threat Intelligence (25%), Firewalls (20%), Incident Response (15%), Network Protocols (10%)",
    "Interests": "Designing secure networks, staying updated with threats",
    "Health Issues": "Stress, anxiety, sleep disorders"
  },
  {
    "Job Role": "Software Engineer",
    "Soft Skills": "Problem-solving, technical expertise, Collaboration, communication",
    "Technical Skills": "C++, Python, Java (30%), Debugging (20%), Software Design (20%), APIs (15%), Databases (15%)",
    "Interests": "Designing and maintaining software solutions",
    "Health Issues": "Eye strain, sleep disorders, repetitive strain injuries"
  }
];

// Populate the dropdown with job roles
const jobRoleSelect = document.getElementById('jobRoleSelect');
jobRoles.forEach((job, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = job['Job Role'];
  jobRoleSelect.appendChild(option);
});

// Function to display job details in the table
function displayJobDetails(jobIndex) {
  const job = jobRoles[jobIndex];
  const jobDetailsTable = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
  
  // Clear previous details
  jobDetailsTable.innerHTML = '';
  
  const row = jobDetailsTable.insertRow();
  row.insertCell(0).textContent = job['Job Role'];
  row.insertCell(1).textContent = job['Soft Skills'];
  row.insertCell(2).textContent = job['Technical Skills'];
  row.insertCell(3).textContent = job['Interests'];
  row.insertCell(4).textContent = job['Health Issues'];

  document.getElementById('jobDetails').style.display = 'block';
}

// Event listener for job role selection
jobRoleSelect.addEventListener('change', function () {
  const selectedJobIndex = jobRoleSelect.value;
  if (selectedJobIndex !== '') {
    displayJobDetails(selectedJobIndex);
  } else {
    document.getElementById('jobDetails').style.display = 'none';
  }
});
