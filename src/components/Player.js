import  React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,
    faAngleRight, 
    faAngleLeft ,
    faPause,
} from '@fortawesome/free-solid-svg-icons';



const Player = ({songInfo,setSongInfo,audioRef,currentSong, isPlaying, setIsPlaying}) =>{
    
   
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
    const dragHandler = (e) =>{

        audioRef.current.currentTime=e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    };
    const getTime =( time )=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} 
                minimum ={0} 
                type="range" 
                value={songInfo.currentTime} 
                maximum={songInfo.duration}/>
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>  
            <div className="play-control">
            <FontAwesomeIcon  className="skip-back" size ="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon 
            onClick={playSongHandler} 
            className="play" 
            size ="2x" 
            icon={isPlaying? faPause : faPlay}/>
            <FontAwesomeIcon className="skip-forward" size ="2x" icon={faAngleRight}/>
            </div>          
        </div>
        
    );
};

export default Player;