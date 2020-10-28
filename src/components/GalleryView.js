import React, { Component } from "react";
import $ from "jquery";

class GalleryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        };
    }

    getPhotoData() {
        // Retrieve gallery information
        $.ajax({
            url: "../photos.json",
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

    render() {
        var photo_render = [];

        var gallery = this.props.location.pathname.substr(11);
        var gallery_name = gallery.replace(/[_-]/g, " ")
            .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

        var photos = this.state.photos[gallery]
        console.log(photos)
        if (photos !== undefined){ 
            for (var photo of photos) {
                photo_render.push(
                    <div className="imagewell-nocaption"><div className="dropshadow"><div className="dropshadowBL"><div className="dropshadowTR">
                        {/* TODO ADD LINKS AND STUFF TO PHOTO VIEW */}
                    </div></div></div></div>
                )
            }
        }


        return (
            <div>
                <h1>{gallery_name + " Gallery"}</h1>
                {photo_render}
            </div>
        )
    }
}

export default GalleryView;