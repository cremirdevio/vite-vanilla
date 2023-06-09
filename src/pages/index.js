import Callout from "../sections/Callout";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Navigation from "../sections/Navigation";

export default function HomePage(container) {
    Navigation(container);
    Hero(container);
    Callout(container);
    Footer(container);
}