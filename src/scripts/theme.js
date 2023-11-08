const button = document.querySelector('.header__btn');
const root = document.documentElement;
let darkMode = false;

const themeChange = () => {
    darkMode = !darkMode;
    root.classList.toggle("dark-mode");
    button.classList.toggle("header__btn--dark-mode");
    localStorage.setItem("theme", JSON.stringify(darkMode));
}

export const handleThemeChange = () => {
    button.addEventListener("click", themeChange);
}

export const themeAnalisys = () => {
    darkMode = JSON.parse(localStorage.getItem("theme"));
    if(darkMode){
        root.classList.add("dark-mode");
        button.classList.toggle("header__btn--dark-mode");
    }
}