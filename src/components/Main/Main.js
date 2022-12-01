import React, { useEffect, useState } from 'react'
import request from '../../Request';
import axios from "axios"


function Main() {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        axios.get(request.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])

    console.log(movies);

  return (
    <div>

    </div>
  )
}

export default Main