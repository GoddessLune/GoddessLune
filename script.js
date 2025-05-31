// Script to show a thank you message when the tribute button is clicked
document.querySelector('button').addEventListener('click', function() {
    // When the user clicks the button, show a thank you message
    alert("Thank you for your tribute! You are now part of GoddessLune's Temple.");
});

// Script to change the Tribute Level information when clicked
const tributeLevels = document.querySelectorAll('.tribute-level');
tributeLevels.forEach(level => {
    level.addEventListener('click', function() {
        const levelName = level.querySelector('h3').innerText;
        alert(`You have selected the ${levelName} tribute level. Please proceed to tribute.`);
    });
});

// Optional: Smooth scrolling for internal navigation links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
