// Job Roles Data
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
  // Additional job roles...
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

  // Insert new job details
  const row = jobDetailsTable.insertRow();
  row.insertCell(0).textContent = job['Job Role'];
  row.insertCell(1).textContent = job['Soft Skills'];
  row.insertCell(2).textContent = job['Technical Skills'];
  row.insertCell(3).textContent = job['Interests'];
  row.insertCell(4).textContent = job['Health Issues'];

  // Display the job details container
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
