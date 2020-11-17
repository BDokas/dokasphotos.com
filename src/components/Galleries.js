import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Galleries extends Component {
    getImage(gallery) {
        var img = "";
        try {
            img = require("../img/" + gallery + "/front.jpg");
        } catch (err) {
            // TODO replace this with something... better
            img = require("../img/front/IMG_4709.jpg");
        }

        return img;
    }

    render() {
        var gallery_render = [];

        if (this.props.gallery_names) {
            for (var gallery of this.props.gallery_names) {
                // Create a human-friendly name for each gallery
                var gallery_name = gallery
                    .replace(/[_-]/g, " ")
                    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

                gallery_render.push(
                    <div className="imagewell">
                        <span>
                            <NavLink
                                to={"/galleries/" + gallery}
                                title={"View the photos in the " + gallery_name + " gallery"}
                            >
                                {gallery_name}
                            </NavLink>
                        </span>
                        <div className="dropshadow">
                            <div className="dropshadowBL">
                                <div className="dropshadowTR">
                                    <NavLink
                                        to={"/galleries/" + gallery}
                                        title={
                                            "View the photos in the " + gallery_name + " gallery"
                                        }
                                    >
                                        <img src={this.getImage(gallery)} alt={gallery} />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className="galleries">
                <h2>Galleries</h2>
                <div className="gallery-container">
                    {gallery_render}
                </div>
            </div>
        );
    }
}

export default Galleries;
