import htmlContent from './Navigation.html';

// append the htmlcontent to the container
const Navigation = (container) => {
    container.innerHTML += htmlContent;
}

export default Navigation;