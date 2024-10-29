import { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import {useNavigate } from "react-router-dom";

const WriteContent = () => {
     const [title, setTitle] = useState("")
     const [content, setContent] = useState("")
     const navigate = useNavigate();
     const token = localStorage.getItem("token")
     
     const submit =  ()=>{
            try {
                  axios.post(`${BACKEND_URL}/api/v1/blog`,{
                   title:title,
                   content:content

                },{
                    headers:{
                        Authorization: token
                    }
                })
                navigate("/myblogs");
              } catch (e) {
                    alert("Blog is not uploaded")
              }
        
     }


  return (
<div className="flex flex-col gap-4 max-w-md mx-auto my-8">
  <input 
    type="text" 
    placeholder="Title" 
    onChange={(e)=>{setTitle(e.target.value)}
    }
    className="p-3 border-2 border-blue-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition duration-200"/>

  <textarea 
    placeholder="Content" 
    onChange={(e)=>{setContent(e.target.value)}}
    className="p-3 border-2 border-blue-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition duration-200 resize-none h-32"/>

    <button onClick={submit}>Submit</button>
</div>


  )
}

export default WriteContent
