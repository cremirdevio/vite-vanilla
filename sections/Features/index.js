import htmlContent from './Features.html?raw';

const Features = (param) => {
    param.innerHTML += htmlContent;
}

export default Features;