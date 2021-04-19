import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Photo from "./Photo";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            photos: {},
        };
    }

    componentDidMount() {
        fetch('https://15.222.77.108:8000/api/' + this.getGalleryName())
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({ photos: jsonData })
                this.setState({ isLoaded: true })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    getImage(name, gallery) {
        var img = "";
        try {
            img = this.state.photos[name].url
        } catch (err) {
            // TODO replace this with something... better
            img = "data:,";
        }
        return img;
    }

    getGalleryName() {
        var url = this.props.location.pathname.substr(11);
        var slash = url.indexOf('/');
        if (slash !== -1) url = url.substr(0, slash)
        return url;
    }

    addToCart() {
        var storedPhotos = JSON.parse(localStorage.getItem('photos'))
        if (storedPhotos == null) {
            storedPhotos = []
        }
        for (var key of Object.keys(this.state.photos)) {
            this.state.photos[key]['size'] = 'unframed-11X14'
            storedPhotos.push(this.state.photos[key])     
        }
        localStorage.setItem('photos', JSON.stringify(storedPhotos))
        document.getElementById('addToCart').innerHTML = 'Added to Cart!'
        document.getElementById('goToCart').innerHTML = 'Go To Cart'
        document.getElementById('cartButton').innerHTML = 'Cart (' + storedPhotos.length +')'
    }

    render() {
        var gallery = this.getGalleryName();
        var gallery_name = gallery
            .replace(/[_-]/g, " ")
            .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

        var photo_render = [];

        if (this.state.isLoaded) {
            for (var photo of Object.keys(this.state.photos).sort()) {
                var photo_name = photo
                    .replace(/[_-]/g, " ")
                    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
                photo_render.push(
                    <div className="imagewell">
                        <div className="image-title">
                            <NavLink
                                to={"/galleries/" + gallery + "/" + photo}
                                title={"View " + photo_name}
                            >
                                {photo_name}
                            </NavLink>
                        </div>
                        <NavLink
                            to={"/galleries/" + gallery + "/" + photo}
                            title={"View " + photo_name}
                        >
                            <img
                                src={this.getImage(photo, gallery)}
                                alt={photo}
                            />
                        </NavLink>
                        <Route
                            path={"/galleries/" + gallery + "/" + photo}
                            render={(props) => (
                                <Photo {...props} photos={this.state.photos} gallery={gallery} />
                            )}
                        />
                    </div>
                );
            }

        }

        return <div className="gallery">
            <h2>{gallery_name + " Gallery"}</h2>
            <div className="gallery-container">
                {photo_render}
            </div>
            <p><a href='#/' id='addToCart' onClick={() => this.addToCart()}>Add Entire Gallery to Cart</a></p>
            <p><NavLink id='goToCart' to={{
                            pathname: "/cart",
                        }}></NavLink></p>
        </div>;
    }
}

export default Gallery;
