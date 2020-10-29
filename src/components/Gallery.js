import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import $ from "jquery";

import Photo from "./Photo";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        };
    }

    getPhotoData() {
        // Retrieve gallery information
        $.ajax({
            url: process.env.PUBLIC_URL + "/photos.json",
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ photos: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            },
        });
    }

    componentDidMount() {
        this.getPhotoData();
    }

    getImage(name, gallery) {
        var img = "";
        try {
            img = require("../img/" + gallery + "/" + name + "-thumb.jpg");
        } catch (err) {
            // TODO replace this with something
            img = require("../img/front/IMG_4709.jpg");
        }

        return img;
    }

    render() {
        var gallery = this.props.location.pathname.substr(11);
        var gallery_name = gallery
            .replace(/[_-]/g, " ")
            .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

        var photo_render = [<h1>{gallery_name + " Gallery"}</h1>];

        var photos = this.state.photos[gallery];
        if (photos !== undefined) {
            for (var photo of photos) {
                photo_render.push(
                    <div>
                        <span>
                            <NavLink
                                to={"/galleries/" + gallery + "/" + photo.name}
                                title={"View " + photo.title}
                            >
                                {photo.title}
                            </NavLink>
                        </span>
                        <div className="imagewell-nocaption">
                            <NavLink
                                to={"/galleries/" + gallery + "/" + photo.name}
                                title={"View " + photo.title}
                            >
                                <img
                                    src={this.getImage(photo.img, gallery)}
                                    alt={photo.title}
                                />
                            </NavLink>
                            <Route
                                path={"/galleries/" + gallery + "/" + photo.name}
                                component={Photo}
                            />
                        </div>
                    </div>
                );
            }
        }

        return <div>{photo_render}</div>;
    }
}

export default Gallery;
