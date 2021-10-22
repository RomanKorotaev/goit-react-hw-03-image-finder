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
let hitsArray = []


/////////////----

////////////////------


class App extends Component {

state = {
  imagesArray: [],
  quiryWord: "",
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
    imageApiService.query = this.state.quiryWord;

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
      });
}


  render () {
  
    return (
      <div>
       
       {/* Внимание! Важный синтаксис. Вот как в данном случае правильно пеередавать метот класса как пром в дочерний react-компонент  */}
        <Searchbar onSubmit= {this.handleSummitForm}/>

       <ImageGallery imagesArray= {this.state.imagesArray}/>
        
        <Loader />
        <Button onLoadMoreBtn = {this.handleLoadMore}/>
        <Modal />

      </div>
    )
  }
}

export default App;

