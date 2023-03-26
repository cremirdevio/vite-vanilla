import Hero from "./sections/Hero";
import Navigation from "./sections/Navigation/";
import Pricing from "./sections/Pricing/"
import Hosting from "./sections/Hosting";
import Features from "./sections/Features";
import Testimonial from "./sections/Testimonial";
import Callout from "./sections/Callout";
import Footer from "./sections/Footer";

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