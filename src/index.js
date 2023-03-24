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

// bootstrap project
const bodyContainer = document.body;
const render = (container) => {
    // root container
    const appContainer = document.querySelector('#app');

    // Sections
    Navigation(appContainer);
    Hero(appContainer);
    Pricing(appContainer);
    ChooseUs(appContainer);
    Feature(appContainer)
    Testimonial(appContainer)
    Callout(appContainer)
    Footer(appContainer)

    return container.appendChild(appContainer);
}

render(bodyContainer);