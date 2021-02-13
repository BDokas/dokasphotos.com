import React, { Component } from "react";

class Purchase extends Component {
    render() {
        var html = [];
        if (this.props.location.state) {
            var { title, img, gallery } = this.props.location.state;

            html.push(
                <div className="purchase">
                    <h2>Purchase "{title}"</h2>
                    <img src={require("../img/" + gallery + "/" + img + ".jpg")} alt="" />
                    <p>Fill out this form to send a print request for "{title}".</p>
                    <p>
                        Note that you won't be charged immediately for this purchase. You
                        will need to work out shipping details with me based on your
                        location. I will write you an email upon receipt of your request to
                        work out the details.{" "}
                    </p>
                </div>
            );
        }

        return html;
    }
}

export default Purchase;
