import React, { Component } from "react";
import GalleryView from "./GalleryView";
import { NavLink, Route } from "react-router-dom";
import $ from "jquery";

class Galleries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleries: {},
        };
    }

    getGalleryData() {
        $.ajax({
            url: "./galleries.json",
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ galleries: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            },
        });
    }

    componentDidMount() {
        this.getGalleryData();
    }

    getImage(gallery) {
        var img = "";
        try {
            img = require("../img/" + gallery + "/front.jpg");
        } catch (err) {
            img = require("../img/front/IMG_4709.jpg");
        }

        return img;
    }

    render() {
        var gallery_render = [];

        if (this.state.galleries.names) {
            var galleries = this.state.galleries.names;

            for (var gallery of galleries) {
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
                        <div class="dropshadow">
                            <div class="dropshadowBL">
                                <div class="dropshadowTR">
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
                        <Route path={"/galleries/" + gallery} render={(props) => ( <GalleryView gallery={gallery}/>)}/>
                    </div>
                );
            }
        }

        return <div>{gallery_render}</div>;
    }
}

export default Galleries;
