import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Skeleton } from "../components/Skeleton";
import { BlogCard } from "../components/BlogCard";


interface Blog{
    content:string;
    title:string;
    name:string;
    // createdAt:Date;
    author:{
        name:string
    }
}

export const MyBlogs = () => {
        const [blogs, setBlogs] = useState<Blog[]>([]);
          
        const token = localStorage.getItem("token")

        useEffect(() => {
          axios.get(`${BACKEND_URL}/api/v1/blog/myblog/${token}`,{
            headers:{
                Authorization: token
            }
          })
          .then(response => {
            setBlogs(response.data.posts);
          })
        }, [])


    return (
        <div className="flex justify-center">
        <div className="">
          {token?Array.isArray(blogs) && blogs.length > 0 ? (
                    blogs.map(blog => (
                        <BlogCard
                            authorName={blog.author.name + " (you)"||"Anoymnus"}
                            title={blog.title}
                            content={blog.content}
                            // createdAt={"2024-04-07"}
                        />
                    ))
                ) : (
                    <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    </>
                ):(
                    <div className="flex flex-col h-screen items-center text-center">
                        <img 
                            src="/path/to/error-image.png" 
                            alt="Not Authenticated" 
                            className="w-32 h-32 mb-4" // Adjust size as needed
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
                    </div>)}
        </div>
        </div>
    )
}