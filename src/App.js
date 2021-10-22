import React, {Component} from 'react';
import Searchbar from './components/Searchbar'

import ImageGallery from './components/ImageGallery'
import ImageGalleryItem from './components/ImageGalleryItem'
import Loader from './components/Loader'
import Button from './components/Button'
import Modal from './components/Modal'



// import './App.css'


////------------------GET-запрос -------------------

import ImageApiService from './js/apiService'


const imageApiService = new ImageApiService();


class App extends Component {

state = {
  imagesArray: [],
  quiryWord: "",
  isLoading: false,
  largeImageURL: '',

}

componentDidMount () {

  console.log (" App: componentDidMount ()");

  imageApiService.fetchImages()
  .then (hits=>{
        // Перед записью данных в state  проверяем не пустой ли массив с полученными данными
        if (hits.length !== 0) { 
          this.setState ({imagesArray:  hits })
          console.log (" Записали hits  в  стейт - imagesArray", this.state.imagesArray );
        }
  });
}

componentDidUpdate (prevProp, prevState) {

  if ( this.state.quiryWord !== prevState.quiryWord) {
    
    imageApiService.resetPage(); // перед каждым новым запросом сбрасываем на 1 (первая в числе пагинации с бекенда)
    imageApiService.query = this.state.quiryWord; // обновляем значение поискового слова

    imageApiService.fetchImages()
    .then (hits=>{
          // Перед записью данных в state  проверяем не пустой ли массив с полученными данными
          if (hits.length !== 0) { 
            this.setState ({imagesArray:  hits })
            console.log (" Записали hits  в  стейт - imagesArray", this.state.imagesArray );
          }
    });  
  }
 }

handleSummitForm = quiryWord => {
  console.log("Вызвана функция handleSummitForm = (quiryWord) : ", quiryWord);
  this.setState ({quiryWord}) // пример записи короткого свойства. Аналог: {quiryWord : quiryWord } , где второе слово- это полученный аргумент функции
}

handleLoadMore = () => {
  console.log(" Сработала функция handleLoadMore ");

       imageApiService.incerementPage();

      imageApiService.fetchImages()
      .then (hits=>{
        if (hits.length !== 0) {
             this.setState ( (prevState) =>{
                  return {
                      imagesArray: [...prevState.imagesArray, ...hits]
                  } 
          } )
        }   

        window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: 'smooth',
                });
      });   
}

handleOnImgClick = (largeImageURL) => {
  console.log ('Сработала функция handleOnImgClick. Клинули на  Img   .   largeImageURL = ', largeImageURL);
  this.setState ({largeImageURL:  largeImageURL })

}


  render () {
  
    return (
      <div>
       
       {/* Внимание! Важный синтаксис. Вот как в данном случае правильно пеередавать метот класса как пром в дочерний react-компонент  */}
        <Searchbar onSubmit= {this.handleSummitForm}/>

       <ImageGallery 
       imagesArray= {this.state.imagesArray}
       onImgClick = {this.handleOnImgClick}/>
        
        <Loader />
        <Button onLoadMoreBtn = {this.handleLoadMore}/>
        <Modal largeImageURL={this.state.largeImageURL}/>

      </div>
    )
  }
}

export default App;

