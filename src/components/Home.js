import React from "react";
import { NavLink } from "react-router-dom";

const home = () => {
    return (
        <div>
            <h1>The Photography of Dick Dokas</h1>
            <div className="imagewell-big">
                <div className="dropshadow-big">
                    <div className="dropshadowBL">
                        <div className="dropshadowTR">
                            <NavLink to="/galleries" title="View the galleries">
                                <img src={require("../img/front/IMG_4603.jpg")} alt="-" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <br className="spacer" />
            <h4>
                &ldquo;Wells - Retrochoir and Lady Chapel&rdquo; &ndash;{" "}
                <a href="/galleries/great_britain/wells_-_retrochoir_and_lady_chapel/">
                    View in the galleries
        </a>
            </h4>
        </div>
    );
};

export default home;
