import React, {Component} from 'react';
import Searchbar from './components/Searchbar'

import ImageGallery from './components/ImageGallery'
import ImageGalleryItem from './components/ImageGalleryItem'
import Loader from './components/Loader'
import Button from './components/Button'
import Modal from './components/Modal'

////------------------GET-запрос -------------------

import ImageApiService from './js/apiService'
const imageApiService = new ImageApiService();
imageApiService.fetchImages();



class App extends Component {



  render () {
    return (
      <div>
        <Searchbar />

        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
        
        </div>
    )
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

