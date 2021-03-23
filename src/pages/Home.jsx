import axios from "axios";
import React, {useState, useEffect} from 'react';
import SingleSupportCase from './../SingleSupportCase'


function Home() {

const [videos, setVideos] = useState([])

//ComponentDidMount useEffect with empthy array
     useEffect(() => {
        axios.get("/api/video", {withCredentials:true
        }).then((response)=>{
            
        setVideos(response.data);
          
     })
    },[])

    return( 
        <div>
        {videos.map((video, index) => 
            <SingleSupportCase key= {index} video={video}/>
           )} 
        </div>
    )
}

export default Home