import React, { Component } from 'react';
import $ from "jquery";

class Galleries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: {}
        };
    }

    getPhotoData() {
        $.ajax({
            url: './photos.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ photos: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getPhotoData();
    }


    render(props) {
        if (this.props.data) {

        }

        return (
            <div>
                <p>hi</p>
            </div>
        );
    }
};

export default Galleries;