document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        alert("Your tribute is noticed. GoddessLune welcomes your devotion!");
    });

    const levels = document.querySelectorAll('.level');
    levels.forEach(level => {
        level.addEventListener('click', () => {
            alert(`You selected "${level.querySelector('h3').innerText}". Tribute now to gain my favor.`);
        });
    });
});
