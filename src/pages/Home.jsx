import axios from "axios";
import React, {useState, useEffect} from 'react';
import SingleSupportCase from './../SingleSupportCase'
import { format} from 'date-fns'



function Home() {

const [videos, setVideos] = useState([])
const [searchValue, setSearchValue] = useState("")

//ComponentDidMount useEffect with empthy array
     useEffect(() => {
        axios.get("/api/video", {withCredentials:true
        }).then((response)=>{     
        setVideos(response.data);  
     })
    },[])

    return( 
      
        <div>
        <input placeholder="Search" onChange={(e)=> {

            setSearchValue(e.target.value)
          }} class="searchBar"></input>
        {videos.filter((video)=>{

           let videoString =  (video.browser_type + video.issue_description + video.video_url + format(new Date(Number(video.timestamp)), 'MM/dd - yyyy - HH:mm')).toLowerCase()
           
            if(videoString.includes(searchValue.toLowerCase()))
            return video
        }).map((video, index) => 
            <SingleSupportCase key= {index} video={video}/>
           )} 
        </div>
    )
}

export default Home