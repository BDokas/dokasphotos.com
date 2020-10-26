import React, { Component } from 'react';
import $ from "jquery";

class Galleries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleries: {}
        };
    }

    getGalleryData() {
        $.ajax({
            url: './galleries.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ galleries: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getGalleryData();
    }

    getImage(gallery) {
        var img = ""
        try {
            img = require("../img/"+gallery+"/front.jpg");
        } catch (err) {
            img = require("../img/front/IMG_4709.jpg");
        }

        return(img);
    }


    render() {
        var gallery_render = [];

        if (this.state.galleries.names){
            var galleries = this.state.galleries.names;

            for (var gallery of galleries) {
                gallery_render.push(
                    <div className="imagewell">
                        <span><a href={gallery + "/"} title={"View the photos in the " + gallery + " gallery"}>{gallery}</a></span>
                        <div class="dropshadow"><div class="dropshadowBL"><div class="dropshadowTR">
                            <a href={gallery + "/"} title={"View the photos in the " + gallery + " gallery"}><img src={this.getImage(gallery)} alt={gallery} /></a>
                        </div></div></div>
                    </div>
                )
            }
        }

        return (
            <div>
                {gallery_render}
            </div>
        );
    }
};

export default Galleries;