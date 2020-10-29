import React, { Component } from "react";

class Photo extends Component {
    render() {
        return (
            <div>
                <img src={require("../img/alps/front.jpg")} alt={"test"}/>
                <p>{this.props.photo}</p>
            </div>
        );
    }
}

export default Photo;