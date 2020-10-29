import React, { Component } from "react";

class Photo extends Component {

    getPhotoData() {
        var path = this.props.location.pathname;
        var gallery_index = path.search(this.props.gallery);
        var photo_name = path.substring(gallery_index + this.props.gallery.length + 1);

        for (var {name, title, img} of this.props.photos) {
            if (name === photo_name) {
                return {title, img};
            }
        }
        return undefined;
    }

    render() {
        var {title, img} = this.getPhotoData();
        return (
            <div>
                <img src={require("../img/" + this.props.gallery + "/" + img + ".jpg")} alt={title}/>
            </div>
        );
    }
}

export default Photo;