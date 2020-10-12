import React from "react";

const home = () => {
    return (
        <div>
            <h1>The Photography of Dick Dokas</h1>
            <div class="imagewell-big">
                <div class="dropshadow-big">
                    <div class="dropshadowBL">
                        <div class="dropshadowTR">
                            <a href="galleries/" title="View the galleries">
                                <img src={require("../img/front/IMG_4603.jpg")} alt="-" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br class="spacer" />
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
