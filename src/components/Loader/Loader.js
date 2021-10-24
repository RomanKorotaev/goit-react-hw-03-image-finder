import React, {Component} from 'react';
import s from './Loader.module.css'
import loadingImg from './loadingImg.jpg'


class Loader extends Component {

    render() {
        return (
          
           <img src ={loadingImg.jpg} width="240" alt="Loading..."/>
        )
    }
}

export default Loader;