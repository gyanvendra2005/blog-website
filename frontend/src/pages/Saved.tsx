import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Skeleton } from "../components/Skeleton";
import { BookMarked } from "../components/BookMarked";


interface Blog{
    content:string;
    title:string;
    name:string;
    // createdAt:Date;
    author:{
        name:string
    };
    
}

export const Saved = () => {
      
    const token = localStorage.getItem("token")
    if(!token){
        alert("YOU ARE NOT SIGN IN")
    }

    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
      axios.get(`${BACKEND_URL}/api/v1/blog/saved`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
      })
      .then(response => {
        setBlogs(response.data.posts);
      })
    }, [])


    return (

<div className="flex justify-center">
<div className="flex flex-col items-center">
    {   token ? (
        Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map(blog => (
               blog ? (
                    <BookMarked
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                    />
                ) : (
                    <div className="flex flex-col h-screen items-center text-center">
                        <img 
                            src="/path/to/error-image.png" 
                            alt="Blog Not Found" 
                            className="w-32 h-32 mb-4"
                        />
                        <p className="text-red-600 font-semibold">
                            Blog not found.
                        </p>
                    </div>
                )
            ))
        ) : (
            <div className="flex flex-col items-center">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        )
    ) : (
        <div className="flex flex-col h-screen items-center text-center">
            <img 
                src="/path/to/error-image.png" 
                alt="Not Authenticated" 
                className="w-32 h-32 mb-4"
            />
            <p className="text-red-600 font-semibold">
                You are not authenticated.
            </p>
            <p className="mb-2 text-gray-700">
                Join us today to access exclusive content!
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
                Sign Up
            </button>
        </div>
    )}
</div>
</div>
    
    )
}