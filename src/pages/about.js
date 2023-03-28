import Callout from "../sections/Callout";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Navigation from "../sections/Navigation";
import Testimonial from "../sections/Testimonial";

export default function AboutPage(container) {
    Navigation(container);
    Features(container);
    Testimonial(container);
    Callout(container);
    Footer(container);
}