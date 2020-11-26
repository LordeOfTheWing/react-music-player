import  React , {useRef ,useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';



const Player = ({currentSong, isPlaying, setIsPlaying}) =>{
    
        //Ref
    const audioRef = useRef(null);
        //Event handlers
    const playSongHandler = ()=>{
    //    console.log(audioRef.current
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();   
            setIsPlaying(!isPlaying);        
        }
        
    };
     const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // console.log(current)
        setSongInfo({...songInfo, currentTime:current, duration:duration });        
    };
    //State
    const [songInfo , setSongInfo] = useState({
        currentTime: null,
        duration: null,
    });

   

    const getTime =( time )=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>  
            <div className="play-control">
            <FontAwesomeIcon  className="skip-back" size ="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" size ="2x" icon={faPlay}/>
            <FontAwesomeIcon className="skip-forward" size ="2x" icon={faAngleRight}/>
            </div>  
            <audio 
            onTimeUpdate={timeUpdateHandler} 
            ref={audioRef} 
            src={currentSong.audio}
            onLoadedMetadata={timeUpdateHandler}>
               </audio>           
        </div>
        
    );
};

export default Player;