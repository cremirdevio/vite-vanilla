import htmlContent from './Hero.html?raw';

const Hero = (container) => {
    container.innerHTML += htmlContent;
}

export default Hero;