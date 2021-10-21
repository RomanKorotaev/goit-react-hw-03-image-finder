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

//  imageApiService.fetchImages().then (hits=>{
//   // console.log ("hits : ", hits);
//   hitsArray = hits;
// });


///////////////////
///////////
const testArray = [
  {id: 736877, pageURL: 'https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/', type: 'photo', tags: 'tree, cat, silhouette', previewURL: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg'},
  {id: 2083492, pageURL: 'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/', type: 'photo', tags: 'cat, young animal, kitten', previewURL: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_150.jpg'},
  {id: 323262, pageURL: 'https://pixabay.com/photos/cat-pet-licking-animal-tabby-cat-323262/', type: 'photo', tags: 'cat, pet, licking', previewURL: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_150.jpg'},
  {id: 1045782, pageURL: 'https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1045782/', type: 'photo', tags: 'cat, animal, cat portrait', previewURL: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_150.jpg'},
  {id: 694730, pageURL: 'https://pixabay.com/photos/maine-coon-cat-cat-s-eyes-black-cat-694730/', type: 'photo', tags: "maine coon, cat, cat's eyes", previewURL: 'https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_150.jpg'},
  {id: 1285634, pageURL: 'https://pixabay.com/photos/cat-cat-s-eyes-blue-eyes-gray-cat-1285634/', type: 'photo', tags: "cat, cat's eyes, blue eyes", previewURL: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_150.png'},
  {id: 1149841, pageURL: 'https://pixabay.com/photos/friends-cat-and-dog-pets-cat-dog-1149841/', type: 'photo', tags: 'friends, cat and dog, pets', previewURL: 'https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_150.jpg'},
  {id: 2934720, pageURL: 'https://pixabay.com/photos/cat-kitten-pets-animals-housecat-2934720/', type: 'photo', tags: 'cat, kitten, pets', previewURL: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_150.jpg'},
  {id: 3715733, pageURL: 'https://pixabay.com/photos/pets-cute-cat-dog-cute-wallpaper-3715733/', type: 'photo', tags: 'pets, cute, cat', previewURL: 'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_150.jpg'},
  {id: 4611189, pageURL: 'https://pixabay.com/photos/cat-small-kitten-domestic-cat-pet-4611189/', type: 'photo', tags: 'cat, small, kitten', previewURL: 'https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189_150.jpg'}
  ]
  //////////
  

////////////////


class App extends Component {

state = {
  imagesArray: testArray,

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
  console.log (" Worked: componentDidUpdate ()");
  // console.log ("  componentDidUpdate () - prevState:", prevState);
  // console.log ("  componentDidUpdate () - prevProp:", prevProp);
  // console.log ("  componentDidUpdate () - this.state : ", this.state);

  // if ( this.state.imagesArray !== prevState.imagesArray) {
  //   console.log ("  Обновили статус " );
  //   localStorage.setItem ("hits", JSON.stringify(this.state.imagesArray) );
  // }

}





  render () {
    console.log ( 'this.state.imagesArray :', this.state.imagesArray)

    return (
      <div>
        <Searchbar />

        <ImageGallery imagesArray= {this.state.imagesArray}/>
        
        <Loader />
        <Button />
        <Modal />

        </div>
    )
  }
}

export default App;

