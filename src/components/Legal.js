import React from "react";
import { NavLink } from "react-router-dom";

const legal = () => {
    return (
        <div className="legal">
            <h2>Copyright Information</h2>
            <p>
                This site&rsquo;s visual and written content is copyright 2004 Richard
                Dokas. You can briefly quote selections with attribution, but whole
                reproductions and image display is forbidden without{" "}
                <NavLink to={"/contact"}>obtaining</NavLink> written permission from
                myself.
      </p>
            <p>
                Artwork on this site is entirely original, being produced exclusively by
                myself. You may not reproduce the artwork for display in any format
                without exclusive authorization from myself, the copyright holder.
      </p>
            <p>
                This site&rsquo;s code may be freely adapted and
                studied for learning purposes only. The particular combination of
                layout, typography, images, sizes and colors, however, is unique to this
                site and copyright 2004 Richard Dokas.
      </p>
        </div>
    );
};

export default legal;