import htmlContent from './Testimonial.html?raw';

function Testimonial(params){
    params.innerHTML += htmlContent;
}

export default Testimonial;