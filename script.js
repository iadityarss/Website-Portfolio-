// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic Skill Levels
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.background = '#2193b0';
    skill.innerText = skill.getAttribute('data-skill');
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.background = '#ddd';
    skill.innerText = '';
  });
});

// Contact Form Submission (Demo Alert)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message, Aditya will get back to you soon!');
  this.reset();
});
