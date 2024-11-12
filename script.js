// Array of certificate data
const certificates = [
  { name: "Python Basics by IIT Bombay", url: "https://example.com/cert1" },
  { name: "Aerial Robotics by University of Pennsylvania", url: "https://example.com/cert2" },
  { name: "Arduino Fundamentals by Harvard", url: "https://example.com/cert3" },
  { name: "Deploying Tiny ML by Harvard", url: "https://example.com/cert4" }
];

// Select the container for certificates
const certificatesContainer = document.getElementById("certificates-container");

// Function to display certificates dynamically
function displayCertificates(certificates) {
  certificates.forEach(cert => {
    // Create a div for each certificate
    const certElement = document.createElement("div");
    certElement.classList.add("certificate");

    // Insert certificate content
    certElement.innerHTML = `
      <h3>${cert.name}</h3>
      <a href="${cert.url}" target="_blank">View Certificate</a>
    `;

    // Append to the certificates container
    certificatesContainer.appendChild(certElement);
  });
}

// Call the function to populate certificates
displayCertificates(certificates);

