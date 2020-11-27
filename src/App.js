import React, {useState} from "react";
//import styles 
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

//Import util
import data from './util';

function App() {
  //State
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player  
      isPlaying={isPlaying} 
      currentSong={currentSong} 
      setIsPlaying ={setIsPlaying}
      />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
