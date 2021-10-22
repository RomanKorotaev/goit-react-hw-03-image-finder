import React, {Component} from 'react';
import s from './Button.module.css'

class Button extends Component {

    handleClickBtn = event=> {
        console.log ('Сработала функция handleClickBtn. Клинули на кнопке Загрузить ещё ', event);
      
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });

 this.props.onLoadMoreBtn();
    }

    render() {
        return (
            <button className={s.Button}
                onClick = {this.handleClickBtn}
            > Load more</button>
      
        )
    }
}

export default Button;