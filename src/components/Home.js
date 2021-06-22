import React from "react";
import { NavLink } from "react-router-dom";

const home = () => {
    return (
        <div className="home">
            <h2>The Photography of Dick Dokas</h2>
            <div className="imagewell-big">
                <NavLink to="/galleries/Great Britain/Wells Retrochoir And Lady Chapel" title="View the galleries">
                    <img src={'https://d16b8w2zxhe76z.cloudfront.net/media/media/22712.jpg'} alt="-" />
                </NavLink>
            </div>
            <br className="spacer" />
            <h4>
                &ldquo;Wells - Retrochoir and Lady Chapel&rdquo; &ndash;{" "}
                <NavLink to="/galleries/Great Britain/Wells Retrochoir And Lady Chapel">
                    View in the galleries
                </NavLink>
            </h4>
        </div>
    );
};

export default home;
