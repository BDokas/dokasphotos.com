import { render } from "@testing-library/react";
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Photo from "./Photo";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoaded: true })
        // this.checkForEmptyCart()
    }

    removeFromCart(in_gallery, in_photo) {
        var storedPhotos = JSON.parse(localStorage.getItem('photos'))
        var i = 0
        for (var { gallery, photo, url } of storedPhotos) {
            if (in_gallery === gallery && in_photo === photo) {
                storedPhotos.splice(i, 1)
                localStorage.setItem('photos', JSON.stringify(storedPhotos))
                this.setState({ state: this.state })
                var cartText = (eval(localStorage.photos) === undefined || eval(localStorage.photos).length === 0 ? 'Cart' : 'Cart (' + eval(localStorage.photos).length + ')')
                document.getElementById('cartButton').innerHTML = cartText
                break
            }
            i++
        }
    }

    emptyCart() {
        localStorage.clear()
        this.setState({ state: this.state })
        document.getElementById('cartButton').innerHTML = 'Cart'
    }

    renderGalleries() {
        var saved_photos = eval(localStorage.photos)
        if (saved_photos === undefined) {return}
        const photos = saved_photos.map((data, id) => {
            var photo_name = data.photo
                .replace(/[_-]/g, " ")
                .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
            return <div className="imagewell" key={id}>
                <div className="image-title">
                    <NavLink
                        to={"/galleries/" + data.gallery + "/" + data.photo}
                        title={"View " + photo_name}
                    >
                        {photo_name}
                    </NavLink>
                </div>
                <NavLink
                    to={"/galleries/" + data.gallery + "/" + data.photo}
                    title={"View " + photo_name}
                >
                    <img
                        src={data.url}
                        alt={data.photo}
                    />
                </NavLink>
                <p><a href='#/' onClick={() => this.removeFromCart(data.gallery, data.photo)}>Remove from Cart</a></p>
                <Route
                    path={"/galleries/" + data.gallery + "/" + data.photo}
                    render={(props) => (
                        <Photo {...props} photos={this.state.photos} gallery={data.gallery} />
                    )}
                />
            </div>
        })

        return photos
    }

    render() {
        var html = [];
        if (this.state.isLoaded) {
            html.push(
                <div className="purchase" id="purchase">
                    <h2 id='cartTitle'>Your Cart</h2>
                    <p><a href= '#/' className='checkout' id= 'emptyCart' onClick={() => this.emptyCart()} >Empty Cart</a></p>
                    <div className="gallery-container">
                        {this.renderGalleries()}
                    </div>
                    <p><a href='/checkout' className='checkout' id='checkout'>Checkout</a></p>

                </div>
            );
        }
        return html;
    }
}

export default Cart;
