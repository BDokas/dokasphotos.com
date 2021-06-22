import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import Photo from "./Photo";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            sizes: [['unframed-11X14', 'Frameless (11" X 14")', 135],
            ['framed-11X14', 'Framed (11" X 14")', 190],
            ['unframed-16X20', 'Frameless (16" X 20")', 200],
            ['framed-16X20', 'Framed (16" X 20")', 285]],
            flowers: [['unframed-11X14', 'Frameless (11" X 14")', 155],
            ['framed-11X14', 'Framed (11" X 14")', 210],
            ['unframed-16X20', 'Frameless (16" X 20")', 225],
            ['framed-16X20', 'Framed (16" X 20")', 310]]
        };
    }

    componentDidMount() {
        this.setState({ isLoaded: true })
    }

    removeFromCart(in_gallery, in_photo) {
        var storedPhotos = JSON.parse(localStorage.getItem('photos'))
        var i = 0
        for (var { gallery, photo } of storedPhotos) {
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

    changeSizeSelect(data) {
        var new_size = document.getElementById('size_select_' + data.gallery + data.photo).value
        var storedPhotos = JSON.parse(localStorage.getItem('photos'))
        var i = 0
        for (var {gallery, photo} of storedPhotos) {
            if (data.gallery === gallery && data.photo === photo) {
                storedPhotos[i].size = new_size
            }
            i ++
        }
        localStorage.setItem('photos', JSON.stringify(storedPhotos))
        this.setState({ state: this.state })

    }

    renderSizeSelect(size) {
        const result = this.state.sizes.map((data, id) => {
            if (data[0] === size) {
                return <option selected value={data[0]}>{data[1]}</option>
            }
            return <option value={data[0]}>{data[1]}</option>
        })
        return result
    }

    estimatePrice() {
        var saved_photos = eval(localStorage.photos)
        var price = 0
        if (saved_photos === undefined) { return 0}
        for ( var {gallery, size} of saved_photos) {
            if (gallery.startsWith('Flowers')) {
                for (var new_size of this.state.flowers) {
                    console.log(new_size, size)
                    if (size === new_size[0]) {
                        price += new_size[2]
                    }
                }
            } else {
                for (var new_size of this.state.sizes) {
                    console.log(new_size, size)
                    if (size === new_size[0]) {
                        price += new_size[2]
                    }
                }
            }
            
        }
        var rounded_price = Math.ceil(price * 1.06 * 100) / 100
        return rounded_price
    }

    renderGalleries() {
        var saved_photos = eval(localStorage.photos)
        if (saved_photos === undefined) { return }
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
                <p>
                    <select name='size_select' id={'size_select_'+data.gallery+data.photo} onChange={ () => this.changeSizeSelect(data)}>
                        {this.renderSizeSelect(data.size)}
                    </select>
                </p>
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
                    <p><a href='#/' className='checkout' id='emptyCart' onClick={() => this.emptyCart()} >Empty Cart</a></p>
                    <div className="gallery-container">
                        {this.renderGalleries()}
                    </div>
                    <p>
                        {/* <a href='/checkout' className='checkout' id='checkout'>Checkout</a> */}
                        <NavLink to={{pathname:'/checkout', price:this.estimatePrice()}} className='checkout' id='checkout'>Checkout</NavLink>
                    </p>
                    <div id='price-estimate'>Estimated price after tax: ${this.estimatePrice()}</div>
                </div>
            );
        }
        return html;
    }
}

export default Cart;
