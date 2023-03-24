// styles
import './src/css/normalize.css';
import './src/css/styles.css';

// pages
import About from './src/pages/about';
import Home from './src/pages/home';

// bootstrap project
const bodyContainer = document.body;

// routing
const currentRoute = window.location;


const render = (pageCallback) => {
    // root container
    const appContainer = document.querySelector('#app');

    // render page
    if (pageCallback) {
        pageCallback(appContainer);
    } else {
        appContainer.innerHTML = `<div style="display:flex;justify-content:center;align-items:center;">Page not found</div>`;
    }

    bodyContainer.appendChild(appContainer);
}

// router
const router = () => {
    switch (currentRoute.pathname) {
        case "/":
            render(Home);
            break;
        case "/about":
            render(About);
            break;
        default:
            render();
            break;
    }
}

router();


