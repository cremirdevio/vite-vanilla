import htmlContent from './Pricing.html?raw';

const Pricing = (content) => {
    content.innerHTML += htmlContent;
}

export default Pricing;