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
  largeImageURL: '',
  showModal: false,
  isLoading: false,
}



componentDidMount () {

  console.log (" App: componentDidMount ()");
this.setState ({ isLoading: true})

setTimeout(() => {
  
      imageApiService.fetchImages()
      .then (hits=>{
            // Перед записью данных в state  проверяем не пустой ли массив с полученными данными
            if (hits.length !== 0) { 
              this.setState ({imagesArray:  hits })
              console.log (" Записали hits  в  стейт - imagesArray", this.state.imagesArray );
            }
      })
      .finally( ()=> this.setState({isLoading: false}));
      
}, 1500);

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

  this.toggleModal();
}

// toggleModal = ()=> {
//   this.setState (prevState=> ({
//     showModal: !this.state.showModal
//   }))
// }
 
toggleModal = ()=> {
  this.setState ( ({showModal})=> ({
    showModal: !showModal
  }))
}





  render () {

    const {imagesArray, showModal, largeImageURL} = this.state;
    // const {handleOnImgClick, handleLoadMore} = this;
  
    return (
      <div>
       
       {/* Внимание! Важный синтаксис. Вот как в данном случае правильно пеередавать метот класса как пром в дочерний react-компонент  */}
        <Searchbar onSubmit= {this.handleSummitForm}/>
     
      {this.state.isLoading && <Loader />}  

       <ImageGallery 
       imagesArray= {imagesArray}
       onImgClick = {this.handleOnImgClick}/>
        
        
        <Button onLoadMoreBtn = {this.handleLoadMore}/>

       {/* Рендерим по условию модалку с любым дочерним элементом/содержимым - через props.children         */}
        { showModal && <Modal onModalClose={this.toggleModal}>
          <img src={largeImageURL} alt="picture" />
          </Modal> }

      </div>
    )
  }
}

export default App;

