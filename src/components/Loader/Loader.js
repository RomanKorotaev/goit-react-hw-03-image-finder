import React, {Component} from 'react';
import s from './Loader.module.css'
import loadingImg from './loadingImg.jpg'


class Loader extends Component {

    render() {
        return (
            <div>
           {/* <p> Loader. ЗАГРУЖАЕМ ... </p> */}
           <img src ={loadingImg.jpg} width="240" alt="Loading..."/>
           </div>
        )
    }
}

export default Loader;