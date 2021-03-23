import React from 'react';
import { format} from 'date-fns'
import BigPicture from './../node_modules/bigpicture/src/BigPicture.js'

function SingleSupportCase(props){

    /*
      {videos.map((video, index) => 
            <div key={index}>
            <h3 >{format(new Date(Number(video.timestamp)), 'MM/dd - yyyy - HH:mm') }</h3>
            <video width="160" height="120" controls>
            <source src={"http://" + video.video_url}/>
            </video>
            </div>
           )} 


    */

const startVideo = (e)=>{
    console.log("video startet")
    BigPicture({
		el: e.target,
		vidSrc: e.target.getAttribute('vidSrc'),
	})
}


    return (
        <div className="project">
        <div className="actions" >
          <h3 > Date {format(new Date(Number(props.video.timestamp)), 'MM/dd - yyyy - HH:mm') }</h3>
          <div className="material-icons">
          <span className="material-icons-outlined" vidSrc={ "http://" +props.video.video_url} onClick={startVideo}>play_circle_filled</span>
          <span className="material-icons">delete</span>
        </div>
        </div>
        
        </div>
      );

}

export default SingleSupportCase

