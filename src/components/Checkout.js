import React, { Component } from "react";
import emailjs from 'emailjs-com';
import { renderToString } from 'react-dom/server'

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
        if (saved_photos !== undefined) {
            const body = saved_photos.map((data, id) => {
                var photo_name = data.photo
                    .replace(/[_-]/g, " ")
                    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
                var gallery_name = data.gallery
                    .replace(/[_-]/g, " ")
                    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
                return "Gallery: " + gallery_name + "\tPhoto: " + photo_name + "\n"
            });
            return body
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
        console.log(event.target)
        emailjs.sendForm(
            'service_xzh9i3p',
            'template_mmcy9rk',
            event.target,
            'user_GfzZLyLoK8unCI3uumLrv'
        )
            .then(
                (result) => {
                    send_button.style.color = "green";
                    send_button.innerHTML = "Sent!";
                    localStorage.clear()
                    console.log(result.text);
                },
                (error) => {
                    send_button.style.color = "red";
                    send_button.innerHTML = "Send Failed";
                    console.log(error.text);
                }
            )
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
          <a href="mailto:dick@dokasphotos.com">dick@dokasphotos.com</a>
                </p>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="hidden" value={this.generateBody()} name="message" />
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