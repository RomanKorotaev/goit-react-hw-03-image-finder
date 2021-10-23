import React, {Component} from 'react';
import {createPortal} from 'react-dom'
import s from './Modal.module.css'

const modalRoot = document.querySelector ('#modal-root')

class Modal extends Component {

    render() {

      return  createPortal (
            <div className= {s.Overlay}>
                <div className={s.Modal}>
            
                    {/* Внимание! Если содержимое модалки будем передавать не как отдельный проп для готовой разметки (тег img),
                  а как this.props.children, то сможем переиспользовать модалку, как обычный контейнер для любого содержимого */}
                  
                  {this.props.children}
                  {/* <img src={this.props.largeImageURL} alt="" /> */}
              </div>
            </div>, modalRoot
      )

      
        
    }
}

export default Modal;


// return (
//   <div className= {s.Overlay}>
//   <div className={s.Modal}>

//     {/* Внимание! Если содержимое модалки будем передавать не как отдельный проп для готовой разметки (тег img),
//      а как this.props.children, то сможем переиспользовать модалку, как обычный контейнер для любого содержимого */}
//     {this.props.children}
//       {/* <img src={this.props.largeImageURL} alt="" /> */}
//   </div>
// </div>
// )