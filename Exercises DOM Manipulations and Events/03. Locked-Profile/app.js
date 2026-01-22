function lockedProfile() {
    let showMoreElement = document.querySelectorAll('button');
    Array.from(showMoreElement).forEach(e => e.addEventListener('click', (el) => {
        let profile = el.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;
        let hiddenElementId = profile.querySelector('.profile div').id;

        if (isActive) {
            if (el.target.textContent == 'Show more') {
                let elementToDisplay = document.getElementById(hiddenElementId);
                elementToDisplay.style.display = 'block';
                el.target.textContent = 'Hide it';
            }
            else if (el.target.textContent == 'Hide it') {
                let elementToDisplay = document.getElementById(hiddenElementId);
                elementToDisplay.style.display = '';
                el.target.textContent = 'Show more';
            }
        }
    }));
}