// styles
import './src/css/normalize.css';
import './src/css/styles.css';

// components/sections
import Hero from "./src/sections/Hero";
import Navigation from "./src/sections/Navigation/";
import Pricing from "./src/sections/Pricing/"
import Hosting from "./src/sections/Hosting";
import Features from "./src/sections/Features";
import Testimonial from "./src/sections/Testimonial";
import Callout from "./src/sections/Callout";
import Footer from "./src/sections/Footer";

const mainContainer = document.querySelector("#app");

// Render components
Navigation(mainContainer);
Hero(mainContainer);
//pricing
Pricing(mainContainer);
// Choose us
Hosting(mainContainer);
// Features
Features(mainContainer);
//Testimonial
Testimonial(mainContainer);
//Callout
Callout(mainContainer);
// Footer
Footer(mainContainer);