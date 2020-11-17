import React from "react";

class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         email: "",
         message: "",
      };
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
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     className="form-control"
                     value={this.state.name}
                     onChange={this.onNameChange.bind(this)}
                     required
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                     type="text"
                     className="form-control"
                     value={this.state.email}
                     onChange={this.onEmailChange.bind(this)}
                     required
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                     className="form-control"
                     rows="5"
                     value={this.state.message}
                     onChange={this.onMessageChange.bind(this)}
                     required
                  />
               </div>
               <button type="submit" className="submit-button">
                  Submit
          </button>
            </form>
         </div>
      );
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
      // TODO actually send the email lol
      console.log("submitted");
   }
}

export default Contact;
