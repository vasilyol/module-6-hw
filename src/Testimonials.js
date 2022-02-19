function Testimonials({selectedTestimonial, prevPerson, nextPerson}) {

    const {name, text, description, image} = selectedTestimonial;

    return (<div>
        <p className="testimonial-header">Testimonials</p>
        <div className="testimonial">
            <img src="images/testimonial.png" width="555px" height="364px" alt="testimonials"/>
            <div className="testimonial-container">
                <div className="person-navig">
                    <img src={image} width="100px" height="100px" alt="person"/>
                    <div className="cont-slider">
                        <button className="slider-btn" onClick={prevPerson}><img src="images/ellipse-3-1.png" alt="<"/></button>
                        <button className="slider-btn" onClick={nextPerson}><img src="images/ellipse-2-1.png" alt=">"/></button>
                    </div>
                </div>
                <p className="testimonial-text">{text}</p>
                <p className="testimonial-description">{description}</p>
                <p className="testimonial-name">{name}</p>
            </div>
        </div>  
    </div>);
}

export default Testimonials;