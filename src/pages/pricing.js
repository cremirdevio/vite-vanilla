import Callout from "../sections/Callout";
import Footer from "../sections/Footer";
import Hosting from "../sections/Hosting";
import Navigation from "../sections/Navigation";
import Pricing from "../sections/Pricing";

export default function PricingPage(container) {
    Navigation(container);
    Pricing(container);
    Hosting(container);
    Callout(container);
    Footer(container);
}