import Callout from "../sections/Callout";
import ChooseUs from "../sections/ChooseUs";
import Feature from "../sections/Feature";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Navigation from "../sections/Navigation";
import Pricing from "../sections/Pricing";
import Testimonial from "../sections/Testimonial";

const Home = (container) => {
    // Sections
    Navigation(container);
    Hero(container);
    Pricing(container);
    ChooseUs(container);
    Feature(container)
    Testimonial(container)
    Callout(container)
    Footer(container)
}

export default Home;