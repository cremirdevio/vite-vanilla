import htmlContent from './Navigation.html?raw';

const Navigation = (container) => {
    container.innerHTML += htmlContent;
}

export default Navigation;