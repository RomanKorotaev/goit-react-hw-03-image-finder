import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {

    render() {
        const { pageURL } = this.props;
        return (
        //    <p> ImageGalleryItem </p>
        <img src={pageURL} alt="Какая-то картинка" className="ImageGalleryItem-image" />
        )
    }
}

ImageGalleryItem.propTypes = {
     pageURL: PropTypes.string.isRequired,
};


export default ImageGalleryItem;