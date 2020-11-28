import React, {useState, useRef} from "react";
//import styles 
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

//Import util
import data from './util';

function App() {

   const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // console.log(current)
        setSongInfo({...songInfo, currentTime:current, duration:duration });        
    };
      //Ref
    const audioRef = useRef(null);

  //State
const [songInfo , setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player
      audioRef= {audioRef}
      isPlaying={isPlaying} 
      currentSong={currentSong} 
      setIsPlaying ={setIsPlaying}
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      />
      <Library 
      songs={songs} 
      setCurrentSong={setCurrentSong}
      audioRef= {audioRef} 
      isPlaying={isPlaying}
      setSongs={setSongs}
      libraryStatus={libraryStatus}
      />
       <audio 
            onTimeUpdate={timeUpdateHandler} 
            ref={audioRef} 
            src={currentSong.audio}
            onLoadedMetadata={timeUpdateHandler}>
               </audio>  
    </div>
  );
}

export default App;
