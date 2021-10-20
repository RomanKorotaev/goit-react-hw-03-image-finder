import React, {Component} from 'react';
import Searchbar from './components/Searchbar'

import ImageGallery from './components/ImageGallery'
import ImageGalleryItem from './components/ImageGalleryItem'
import Loader from './components/Loader'
import Button from './components/Button'
import Modal from './components/Modal'

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


// const KEY_API = '23193680-1d95b6a7ab6e160162f942df5'
// const BASE_URL = 'pixabay.com/api'

// fetchImages() {
//   return fetch(`https://${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY_API} `)
//           .then(response => response.json())
//           .then(data => {
//               //console.log(data)
//               //this.page += 1;
//               this.incerementPage();
              
//               return  data.hits;
//           });
// } 