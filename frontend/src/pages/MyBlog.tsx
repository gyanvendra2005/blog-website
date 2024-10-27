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
          {Array.isArray(blogs) && blogs.length > 0 ? (
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
                )}
        </div>
        </div>
    )
}