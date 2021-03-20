import axios from "axios";
import React, {useState} from 'react';
//import { getTime } from 'date-fns'


function Home() {

const [videos, setVideos] = useState([])


    const getVideos = () => {

        axios.get("/api/video", {withCredentials:true
        }).then((response)=>{
            
            setVideos(response.data);
          
    })
}

 



getVideos();


    return( 
        <div>
        <h1> Home </h1>
        {videos.map((video, index) => 
            <div key={index}>
            <h3 >{video.timestamp}</h3>
            <video width="160" height="120" controls>
            <source src={"http://" + video.video_url}/>
            </video>
            </div>
           )} 
        </div>
    )
}

export default Home