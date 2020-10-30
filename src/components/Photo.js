import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Photo extends Component {
    getPhotoData() {
        var path = this.props.location.pathname;
        var gallery_index = path.search(this.props.gallery);
        var photo_name = path.substring(
            gallery_index + this.props.gallery.length + 1
        );

        var curr_idx = 0;

        for (var { name, title, img } of this.props.photos) {
            if (name === photo_name) {
                return { title, img, curr_idx };
            }
            curr_idx += 1;
        }
        return undefined;
    }

    render() {
        var { title, img, curr_idx } = this.getPhotoData();

        let prev_button;
        let next_button;

        if (curr_idx > 0) {
            var prev_photo = this.props.photos[curr_idx - 1];
            prev_button = (
                <NavLink
                    to={"/galleries/" + this.props.gallery + "/" + prev_photo.name}
                >
                    Last
                </NavLink>
            );
        }
        if (curr_idx < this.props.photos.length - 1) {
            var next_photo = this.props.photos[curr_idx + 1];
            next_button = (
                <NavLink
                    to={"/galleries/" + this.props.gallery + "/" + next_photo.name}
                >
                    Next
                </NavLink>
            );
        }
        return (
            <div>
                {prev_button}
                {next_button}
                <img
                    src={require("../img/" + this.props.gallery + "/" + img + ".jpg")}
                    alt={title}
                />
            </div>
        );
    }
}

export default Photo;
