// styles
import './css/normalize.css';
import './css/styles.css';

// sections
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import ChooseUs from './sections/ChooseUs';
import Feature from './sections/Feature';
import Testimonial from './sections/Testimonial';
import Callout from './sections/Callout';
import Footer from './sections/Footer';
import About from './pages/about';

// bootstrap project
const bodyContainer = document.body;

// routing
const currentRoute = window.location;

const render = (pageCallback) => {
    // root container
    const appContainer = document.querySelector('#app');
    // Sections
    pageCallback(appContainer);

    bodyContainer.appendChild(appContainer);
}

switch (currentRoute.pathname) {
    case "/":
        render(About);
        break;
    default:
        break;
}