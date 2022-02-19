import { useState } from "react";
import { dataHeader } from "./data-header";

function Header() {

    const {title, description, image} = dataHeader;

    const [readMore, setReadMore] = useState(false);

    return (<div>
        <div className="header-container">
            <div className="header-text">
                <p className="header-title">{title}</p>
                <p className="header-description">{readMore ? description : description.substring(0, 120) + " ...."}</p>
                <button className="btn-more" onClick={() => setReadMore(!readMore)}>{readMore ? "Read less" : "Read more"}</button>
            </div>
            <div>
                <img src={image} width="600px" height="400px" alt="header"/>
            </div>
        </div>
</div>);
}

export default Header;