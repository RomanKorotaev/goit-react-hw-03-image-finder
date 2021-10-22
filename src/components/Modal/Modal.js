import React, {Component} from 'react';
import s from './Modal.module.css'

class Modal extends Component {

    render() {
        return (
            <div className="Overlay">
            <div className="Modal">
              
              <img src={this.props.largeImageURL} alt="" />
            </div>
          </div>
        )
    }
}

export default Modal;