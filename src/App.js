import React, {useState, useRef} from "react";
//import styles 
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

//Import util
import data from './data';

function App() {

   const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        //calculate percentage

        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);

        // console.log(current)
        setSongInfo({...songInfo,
            currentTime:current, 
            duration:duration,
            animationPercentage: animation,
            });        
    };
      //Ref
    const audioRef = useRef(null);

  //State
const [songInfo , setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
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
      songs={songs}
      setCurrentSong = {setCurrentSong}
      setSongs = {setSongs} 
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
