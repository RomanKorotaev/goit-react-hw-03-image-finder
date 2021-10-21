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



class App extends Component {

state = {
  imagesArray: [],
  quiryWord: "",
}

componentDidMount () {

  console.log (" App: componentDidMount ()");
  imageApiService.fetchImages()
  .then (hits=>{
    console.log (" Из hits App: componentDidMount () сделан get-запрос: ", hits);
    hitsArray = hits;
    console.log (" Получили ответ от бекенда: hitsArray = hits : ", hitsArray);

     // ------- Дублированние данных в localStorage
      //  Если  есть массив с данными, то записываем его в localStorage
      if (  hitsArray.length !== 0) {
        // console.log ("  Обновили статус " );
        localStorage.setItem ("hits", JSON.stringify( hitsArray) );
        console.log (" Записали  hits в  localStorage" );
      } else {console.log ("Пустой" );}

      const tmpHits =  localStorage.getItem ("hits");
      const parsedHits =  JSON.parse( tmpHits )

  // Перед записью данных в state  проверяем не пустой ли массив с полученными данными :   if (parsedContacts)
  if (parsedHits!==null) { 
    this.setState ({imagesArray:  parsedHits })
    console.log (" Записали parsedHits  в  стейт - imagesArray" );
  }

  });

      // // ------- Дублированние данных в localStorage
      // //  Если  есть массив с данными, то записываем его в localStorage
      // if (  hitsArray.length !== 0) {
      //   // console.log ("  Обновили статус " );
      //   localStorage.setItem ("hits", JSON.stringify( hitsArray) );
      //   console.log (" Записали  hits в  localStorage" );
      // } else {console.log ("Пустой" );}
  

      const tmpHits =  localStorage.getItem ("hits");
      const parsedHits =  JSON.parse( tmpHits )

  // // Перед записью данных в state  проверяем не пустой ли массив с полученными данными :   if (parsedContacts)
  // if (parsedHits!==null) { 
  //   this.setState ({imagesArray:  parsedHits })
  //   console.log (" Записали parsedHits  в  стейт - imagesArray" );
  // }

}


componentDidUpdate (prevProp, prevState) {

    if ( this.state.quiryWord !== prevState.quiryWord) {
    console.log (" Worked: componentDidUpdate ().  Обновили статус. quiryWord = " , this.state.quiryWord);
    
    localStorage.setItem ("hits", JSON.stringify(this.state.imagesArray) );

    // Вызываем метод (сеттер) класса ImageApiService() для перезаписи в его конструкторе значения поискового слова
    imageApiService.query = this.state.quiryWord;

     imageApiService.fetchImages()
      .then (hits=>{
        console.log (" Из hits App: componentDidUpdate  сделан ОБНОВЛЁННЫЙ get-запрос: ", hits);
        hitsArray = hits;
        console.log (" Получили НОВЫЙ ответ от бекенда: hitsArray = hits : ", hitsArray); 

        // // ------- Дублированние данных в localStorage
        //  Если  есть массив с данными, то записываем его в localStorage
        if (  hitsArray.length !== 0) {
          // console.log ("  Обновили статус " );
          localStorage.setItem ("hits", JSON.stringify( hitsArray) );
          console.log (" Записали  hits в  localStorage" );
        } else {console.log ("Пустой" );}
  
        const tmpHits =  localStorage.getItem ("hits");
        const parsedHits =  JSON.parse( tmpHits )
  
        // Перед записью данных в state  проверяем не пустой ли массив с полученными данными :   if (parsedContacts)
        if (parsedHits!==null) { 
          this.setState ({imagesArray:  parsedHits })
          console.log (" Записали parsedHits  в  стейт - imagesArray" );
        }


      })
  

    }

}


handleSummitForm = quiryWord => {
  console.log("Вызвана функция handleSummitForm = (quiryWord) : ", quiryWord);
  this.setState ({quiryWord}) // пример записи короткого свойства. Аналог: {quiryWord : quiryWord } , где второе слово- это полученный аргумент функции
}


  render () {
    // console.log ( 'this.state.imagesArray :', this.state.imagesArray)

    return (
      <div>
       
       {/* Внимание! Важный синтаксис. Вот как в данном случае правильно пеередавать метот класса как пром в дочерний react-компонент  */}
        <Searchbar onSubmit= {this.handleSummitForm}/>

        {/* <Searchbar /> */}

        <ImageGallery imagesArray= {this.state.imagesArray}/>
        
        <Loader />
        <Button />
        <Modal />

        </div>
    )
  }
}

export default App;

