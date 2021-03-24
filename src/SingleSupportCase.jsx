import React, {useState, useRef} from 'react';
import { format} from 'date-fns'

import axios from "axios";
import Popup from 'reactjs-popup';
import BigPicture from './../node_modules/bigpicture/src/BigPicture.js'

function SingleSupportCase(props){

const [showDetails, setshowDetails] = useState(false);

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

const details = () => {
  setshowDetails(!showDetails)
}

const startVideo = (e)=>{
   
    BigPicture({
		el: e.target,
		vidSrc: e.target.getAttribute('vidSrc'),
	})
   console.log("video startet")
}

const supportCaseVideoRef = useRef();

const deleteVideo = (id) =>{ 

supportCaseVideoRef.current.style.display = "none" 


  axios.delete("/api/video/delete/" +id, {
  }).then((response)=>{
  console.log( response.data)
})

}




    return (
        <div ref={supportCaseVideoRef} onClick={details} className="project">
        <div className="actions" >
          <h3 > Date {format(new Date(Number(props.video.timestamp)), 'MM/dd - yyyy - HH:mm') }</h3>
          <div className="material-icons">
          <span className="material-icons" vidSrc={"http://"+props.video.video_url} onClick={startVideo}>play_circle_filled</span>
         
          <Popup trigger={<span className="material-icons" >delete</span>} position="left" closeOnDocumentClick>
          {close => (<div className="popUpAreYouSure">Do you want to delete <span onClick={close}><button 
            onClick={()=>{
    
            deleteVideo(props.video.video_id)
            
          }
          }> YES </button> </span>   <button onClick={close}> NO</button>  </div>)}
        </Popup>

        
         </div>
        
        </div>

        {showDetails && <div className="details">
        <label>Browser type: </label> <div>{props.video.browser_type}</div>
        <label>Problem: </label> <div>{props.video.issue_description}</div>
        <label>link: </label> <div>{props.video.website_url}</div>
        </div>}
        
        </div>
      );

}

export default SingleSupportCase

