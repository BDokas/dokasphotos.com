import React, { Component } from "react";

class GalleryView extends Component {
    render () {
        return (
            <div>
                <p>{this.props.gallery}</p>
            </div>
        )
    }
}

export default GalleryView;