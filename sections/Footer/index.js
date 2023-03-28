import htmlContent from './Footer.html?raw';

const Footer = (content) => {
    content.innerHTML += htmlContent;
}

export default Footer;