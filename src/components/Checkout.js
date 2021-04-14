import React, { Component } from "react";
import emailjs from 'emailjs-com';

class Checkout extends Component {
    constructor(props) {
        super(props);
        emailjs.init('user_GfzZLyLoK8unCI3uumLrv')
        this.state = {
            name: "",
            email: "",
        };
    }

    generateBody() {
        var saved_photos = eval(localStorage.photos)
        var sizes = {
            'matted-11X14': 'Matted Frameless (11" X 14")',
            'matted-framed-16X20': 'Matted Framed (16" X 20")',
            'matted-16X20': 'Matted Frameless (16" X 20")',
            'matted-framed-22X28': 'Matted Framed (22" X 28")'
        }

        if (saved_photos !== undefined) {
            const body = saved_photos.map((data, id) => {
                var photo_name = data.photo
                    .replace(/[_-]/g, " ")
                    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
                var gallery_name = data.gallery
                    .replace(/[_-]/g, " ")
                    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
                var photo_size = sizes[data.size]
                var result = "<div className='photo'><p>Gallery: " + gallery_name + "</p><p> Photo: " + photo_name + "</p><p>Size: " + photo_size + "</p><p><img src=" + data.url + " style='max-width:200px' /></div>"
                return result
            });
            var price = ''
            if (this.props.location.price) {
                price = "<h1>Estimated price with tax: $" + this.props.location.price + "</h1>"
            }
            var title_html = "<h2>New order!</h2>" + price + "<div className='wrapper' style='display:grid; grid-template-columns: 250px 250px 250px;'>"
            return title_html + body.toString().replaceAll(',', '') + "</div>"
        }
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var send_button = document.getElementById('submit-button')
        var html = event.target[0].value
        var name = event.target[1].value
        var email = event.target[2].value
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            send_button.style.color = "red";
            send_button.innerHTML = "Invalid Email";
            setTimeout(() => {
                send_button.innerHTML = 'Place Order'
                send_button.style.color = "black";
            }, 2000);
            return
        }
        if (html === "") {
            send_button.style.color = "red";
            send_button.innerHTML = "Empty Cart";
            return
        }
        console.log(html)

        // emailjs.send('service_xzh9i3p', 'template_mmcy9rk', {
        //     to_name: 'Dick',
        //     from_name: name,
        //     user_email: email,
        //     message_html: html
        // })
        //     .then(
        //         (result) => {
        //             send_button.style.color = "green";
        //             send_button.innerHTML = "Order Placed!";
        //             localStorage.clear()
        //             document.getElementById('cartButton').innerHTML = 'Cart'
        //         },
        //         (error) => {
        //             send_button.style.color = "red";
        //             send_button.innerHTML = "Send Failed";
        //         }
        //     )
    }

    render() {
        return (
            <div className="contact">
                <h2>Contact Dick</h2>
                <p>
                    Each order is hand-assembled by myself. Once your order is recieved,
                    I will be in contact with you to collect the necessary information in order
                    to ship your photos as quickly as possible.
                    If you have any concerns, feel free to email me at&nbsp;
                    <a href="mailto:rdokas@gmail.com">rdokas@gmail.com</a>
                </p>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="hidden" value={this.generateBody()} name="message_html" />
                    <div className="form-group">
                        <p><label htmlFor="name">Name:</label></p>
                        <input
                            type="text"
                            id='contact-input'
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                            name="from_name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <p><label htmlFor="inputEmail">Email address:</label></p>
                        <input
                            type="text"
                            id='contact-input'
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                            name="user_email"
                            required
                        />
                    </div>
                    <button type="submit" id="submit-button" className="submit-button">
                        Place Order
          </button>
                </form>
            </div>)
    }

}

export default Checkout