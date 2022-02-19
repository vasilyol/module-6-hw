import { useState } from "react";
import { dataBoots } from "./data-boots";
import { dataTestimonials } from "./data-testimonials";
import Buttons from "./Buttons";  
import Boots from "./Boots";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
    const [boots, setBoots] = useState(dataBoots);
    const [testimonials, setTestimonials] = useState(dataTestimonials);
    const testimonial = testimonials[0];

    const chosenBoots = (searchTerm) => {
        const newBoots = searchTerm === "all" ? [...dataBoots] : dataBoots.filter(element => element.searchTerm === searchTerm);
        setBoots(newBoots);
    }

    const previousPlace = () => {
        const boot = boots[boots.length - 1];
        const newBoots = [boot, ...boots.slice(0, boots.length - 1)];
        setBoots(newBoots);
    }

    const nextPlace = () => {
        const boot = boots[0];
        const newBoots = [...boots.slice(1, boots.length), boot];
        setBoots(newBoots);
    } 
    
    const previousPerson = () => {
        const lastElem = testimonials[testimonials.length -1];
        const newTestimonials = [lastElem, ...testimonials.slice(0, testimonials.length-1)];
        setTestimonials(newTestimonials);
    }

    const nextPerson = () => {
        const firstElem = testimonials[0];
        const newTestimonials = [...testimonials.slice(1, testimonials.length), firstElem];
        setTestimonials(newTestimonials);
    }

    return (<div className="main">
        <Header />
        <Buttons filteredBoots={chosenBoots} prevPlace={previousPlace} nextPlace={nextPlace} />
        <Boots itemsForSale={boots} />
        <Testimonials selectedTestimonial={testimonial} prevPerson={previousPerson} nextPerson={nextPerson} />
        <Footer />
    </div>);
}

export default Main;