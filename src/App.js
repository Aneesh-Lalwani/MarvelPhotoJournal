import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Marvel Photo Journal</h1>
          <img src="../images/marvelStudios.jpg" alt="MarvelStudiosLogo"/>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
