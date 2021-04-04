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

        for (var photo of Object.keys(this.props.photos)) {
            if (photo === photo_name) {
                var name = this.props.photos[photo].name
                var img = this.props.photos[photo].url
                // this.setState({curr_idx: curr_idx})
                return { name, img, curr_idx };
            }

            curr_idx += 1;
        }
    }

    addToCart(keys, curr_idx) {
        var storedPhotos = JSON.parse(localStorage.getItem('photos'))
        if (storedPhotos == null) {
            storedPhotos = []
        }
        var photo = this.props.photos[keys[curr_idx]]
        storedPhotos.push(photo)
        console.log(storedPhotos)
        localStorage.setItem('photos', JSON.stringify(storedPhotos))
        document.getElementById('addToCart').innerHTML = 'Added to Cart!'
        document.getElementById('goToCart').innerHTML = 'Go To Cart'
        document.getElementById('cartButton').innerHTML = 'Cart (' + storedPhotos.length +')'
    }

    render() {
        var keys = Object.keys(this.props.photos)
        var { img, curr_idx } = this.getPhotoData();
        var name = keys[curr_idx]
            .replace(/[_-]/g, " ")
            .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

        let prev_button;
        let next_button;
        if (this.props.purchase) {
            console.log(localStorage.photos)
        }
        else {
            if (curr_idx > 0) {
                var prev_index = keys[curr_idx - 1]
                var prev_photo = this.props.photos[prev_index];
                prev_button = (
                    <NavLink
                        to={"/galleries/" + this.props.gallery + "/" + prev_photo.photo}
                    >
                        &larr; Prev
                    </NavLink>
                );
            }
            if (curr_idx < keys.length - 1) {
                var next_index = keys[curr_idx + 1]
                var next_photo = this.props.photos[next_index];
                next_button = (
                    <NavLink
                        to={"/galleries/" + this.props.gallery + "/" + next_photo.photo}
                    >
                        Next &rarr;
                    </NavLink>
                );
            }
        }
        return (
            <div className="hidden">
                <NavLink to={"/galleries/" + this.props.gallery}>
                    <div className="bg-blur" />
                </NavLink>
                <div className="popup">
                    <NavLink to={"/galleries/" + this.props.gallery}>
                        <div className="close-button">
                            <img src={require("../img/css_elements/x.png")} alt="X" title='Close' />
                        </div>
                    </NavLink>
                    <h2>{name}</h2>
                    <p>{prev_button}
                        {next_button}
                    </p>
                    <img
                        src={img}
                        alt={name}
                    /><p>

                        <a id='addToCart' href='#/' onClick={() => this.addToCart(keys, curr_idx)}>Add to cart</a>

                        <p><NavLink id='goToCart' to={{
                            pathname: "/cart",
                            state: {
                                name: name,
                                img: img,
                                gallery: this.props.gallery
                            }
                        }}></NavLink></p>
                    </p>
                </div>
            </div>
        );
    }
}

export default Photo;
