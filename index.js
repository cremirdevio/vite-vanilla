// styles
import './src/css/normalize.css';
import './src/css/styles.css';

// components/sections
import HomePage from './src/pages';
import PricingPage from './src/pages/pricing';
import AboutPage from './src/pages/about';

// HomePage(mainContainer);
// PricingPage(mainContainer)
// AboutPage(mainContainer);

// render is a function that accepts another function [function that build a page]
const renderer = (pageFunction) => {
    const mainContainer = document.querySelector("#app");
    mainContainer.innerHTML = ""; // clear the content of div#app

    if (pageFunction != undefined) {
        pageFunction(mainContainer);
    } else {
        mainContainer.innerHTML =  `<div style="display:flex;justify-content:center;align-items:center; height: 100vh;">Page not found</div>`;
    }
    
}

// routing
function router() {
    const pathName = window.location.pathname;

    switch (pathName) {
        case "/":
            renderer(HomePage);
            break;
        case "/pricing": 
            renderer(PricingPage);
            break;
        case "/about":
            renderer(AboutPage);
            break;
        default:
            renderer()
            break;
    }
}

router();