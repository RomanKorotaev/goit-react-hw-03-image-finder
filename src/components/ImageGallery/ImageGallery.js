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
        //    <p> ImageGallery </p>
        <ul>
        {/* <span className= {s.contactsListTitle}>Contacts</span> */}
        { imagesArray.map(({id, pageURL}) => (
            <li  key = {id}>
Проверка изображения: (`id = ${id} pageURL=${pageURL}`)
              {/* ВНИМАНИЕ!  Важный синтаксис во время прокидывания пропов по цепочке: onDelete = {()=>onDeleteContact(id)} */}
                  <ImageGalleryItem pageURL={pageURL} />
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
            pageURL: PropTypes.string.isRequired,
        }),
    ), 
  };


export default ImageGallery;