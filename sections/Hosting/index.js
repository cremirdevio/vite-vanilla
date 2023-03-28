import htmlContent from './Hosting.html?raw'

const Hosting = (content) => {
    content.innerHTML += htmlContent;
}

export default Hosting;