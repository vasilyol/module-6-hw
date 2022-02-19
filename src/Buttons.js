function Buttons({filteredBoots, prevPlace, nextPlace}) {

    return (<div>
        <div>
            <p className="gallery">GALLERY</p>
            <p className="category-title">40+ YEARS’ EXPERIENCE</p>
        </div>
        <div className="cont">
            <div className="cont-filter">
                <p className="category">Categories:</p>
                <button className="category-btn" onClick={() => filteredBoots("all")}>All</button>
                <button className="category-btn" onClick={() => filteredBoots("male")}>Male</button>
                <button className="category-btn" onClick={() => filteredBoots("female")}>Female</button>
                <button className="category-btn" onClick={() => filteredBoots("kids")}>Kids</button>
            </div>
            <div className="cont-slider">
                <button className="slider-btn" onClick={prevPlace}><img src="images/ellipse-3-1.png" alt="<"/></button>
                <button className="slider-btn" onClick={nextPlace}><img src="images/ellipse-2-1.png" alt=">"/></button>
            </div>
        </div>    
    </div>);
}

export default Buttons;