document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = level; // Trigger animation
    });
});
