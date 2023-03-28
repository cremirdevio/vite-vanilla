import htmlContent from './Callout.html?raw';

const Callout = (content) => {
    content.innerHTML += htmlContent;
}

export default Callout;