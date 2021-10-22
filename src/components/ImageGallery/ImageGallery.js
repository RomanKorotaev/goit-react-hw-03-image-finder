import React, {Component} from 'react';
import s from './ImageGallery.module.css'
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem'

class ImageGallery extends Component {

    state = {
        imagesArray: [],
      }

    render() {
        const { imagesArray } = this.props;
        return (
                  <ul className={s.ImageGallery}>
                  { imagesArray.map(({id, webformatURL, largeImageURL, tags }) => (
                    <li  key = {id}>
                        <ImageGalleryItem webformatURL={webformatURL}  largeImageURL={largeImageURL} tags={tags}/>
                    </li>
                ))}
             </ul>
        )
    }
}

ImageGallery.propTypes = {
 
    state: PropTypes.arrayOf(
        // Объект с определённой структурой
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired
        }),
    ), 
  };


export default ImageGallery;