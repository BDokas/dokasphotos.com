import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Galleries extends Component {
    getImage(gallery) {
        var img = "";
        try {
            img = require("../img/" + gallery + "/front.jpg");
        } catch (err) {
            // TODO replace this with something... better
            img = require("../img/michigan_ohio/IMG_4709-thumb.jpg");
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
                        <div className="image-title">
                            <NavLink
                                to={"/galleries/" + gallery}
                                title={"View the photos in the " + gallery_name + " gallery"}
                            >
                                {gallery_name}
                            </NavLink>
                        </div>
                        <NavLink
                            to={"/galleries/" + gallery}
                            title={
                                "View the photos in the " + gallery_name + " gallery"
                            }
                        >
                            <img src={this.getImage(gallery)} alt={gallery} />
                        </NavLink>
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
