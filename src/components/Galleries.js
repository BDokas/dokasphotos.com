import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Galleries extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
        };
      }

    componentDidMount() {
        this.setState({isLoaded:true})
    }

    getImage(gallery) {
        var img = "";
        try {
            img = this.props.galleries[gallery].url;

        } catch (err) {
            // TODO replace this with something... better
            img = "data:,";
        }

        return img;
    }

    render() {
        var gallery_render = [];

        if (this.state.isLoaded) {
            for (var gallery of Object.keys(this.props.galleries).sort()) {
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
