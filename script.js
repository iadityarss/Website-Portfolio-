document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
function toggleDescription() {
            const description = document.getElementById('arduino-description');
            description.classList.toggle('hidden');
        }
    // Zoom in effect for certificates when clicked
    const certificates = document.querySelectorAll('.certificate img');
    certificates.forEach(certificate => {
        certificate.addEventListener('click', () => {
            certificate.classList.toggle('zoomed');
            if (certificate.classList.contains('zoomed')) {
                certificate.style.transform = 'scale(1.5)';
                certificate.style.transition = 'transform 0.5s ease';
            } else {
                certificate.style.transform = 'scale(1)';
            }
        });
    });
});
