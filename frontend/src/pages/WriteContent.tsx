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

<div className="flex flex-col gap-4 max-w-xxl mx-auto my-8 p-4 sm:p-6">
  <label className="sr-only" htmlFor="title">Title</label>
  <input 
    id="title"
    type="text" 
    placeholder="Title" 
    onChange={(e) => setTitle(e.target.value)}
    className="p-3 border-2 border-gray-200 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 transition duration-200 w-full"
  />

  <label className="sr-only" htmlFor="content">Content</label>
  <textarea 
    id="content"
    placeholder="Content" 
    onChange={(e) => setContent(e.target.value)}
    className="p-3 border-2 border-gray-200 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition duration-200 resize-none h-32 w-full"
  />

  <button 
    onClick={submit}
    className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 w-full sm:w-60"
  >
    Submit
  </button>
</div>

  )
}

export default WriteContent
