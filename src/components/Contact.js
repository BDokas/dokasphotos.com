import React from "react";
import emailjs from 'emailjs-com';

class Contact extends React.Component {
   constructor(props) {
      super(props);
      emailjs.init('user_GfzZLyLoK8unCI3uumLrv')
      this.state = {
         name: "",
         email: "",
         message: "",
      };
   }

   onNameChange(event) {
      this.setState({ name: event.target.value });
   }

   onEmailChange(event) {
      this.setState({ email: event.target.value });
   }

   onMessageChange(event) {
      this.setState({ message: event.target.value });
   }

   handleSubmit(event) {
      console.log(this.state.name)
      console.log(event.target)
      event.preventDefault();
      var send_button = document.getElementById('submit-button')
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
               console.log(result.text);
            },
            (error) => {
               send_button.style.color = "red";
               send_button.innerHTML = "Send Failed";
               console.log(error.text);
            }
         )
      // TODO actually send the email lol
   }

   render() {
      return (
         <div className="contact">
            <h2>Contact Dick</h2>
            <p>
               You can email me either via the form below or with your favorite email
               application at&nbsp;
          <a href="mailto:dick@dokasphotos.com">dick@dokasphotos.com</a>
            </p>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
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
               <div className="form-group">
                  <p><label htmlFor="message">Message:</label></p>
                  <textarea
                     id='contact-input'
                     className="form-control"
                     rows="5"
                     value={this.state.message}
                     onChange={this.onMessageChange.bind(this)}
                     name="message"
                     required
                  />
               </div>
               <button type="submit" id="submit-button" className="submit-button">
                  Send Message
          </button>
            </form>
         </div>
      );
   }
}

export default Contact;
