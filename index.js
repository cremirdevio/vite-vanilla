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

    pageFunction(mainContainer);
}


renderer(HomePage); // /
// renderer(PricingPage); // /pricing
// renderer(AboutPage); // /about

