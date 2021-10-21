import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {

    state = {
        webformatURL: "",
        largeImageURL: "",
        tags:"" 
      }


    render() {
        const {webformatURL, tags } = this.props;
        return (
        //    <p> ImageGalleryItem </p>
        <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
        )
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
};


export default ImageGalleryItem;