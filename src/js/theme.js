const input = document.querySelector('#theme-switch-toggle');
input.addEventListener('change', onInputChange);
const body = document.querySelector('body');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === 'dark-theme') { 
    input.checked = true;
    body.classList.toggle(Theme.DARK);
}

function onInputChange(event) { 
    event.preventDefault();
    if (input.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', 'dark-theme')
        
   } else { 
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme', 'light-theme')
    }
}
