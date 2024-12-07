import { BlogCard } from "../components/BlogCard"
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Skeleton } from "../components/Skeleton";


interface Blog{
    content:string;
    title:string;
    name:string;
    // createdAt:Date;
    author:{
        name:string
    };
    
}

export const Blogs = () => {
      
    // const token = localStorage.getItem("token")
    // if(!token){
    //     alert("YOU ARE NOT SIGN IN")
    // }

    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
      axios.get(`${BACKEND_URL}/api/v1/blogs/bulk`,{
        // headers:{
        //     Authorization:localStorage.getItem("token")
        // }
      })
      .then(response => {
        setBlogs(response.data.posts);
      })
    }, [])
    


    return (
        
        <div className="flex justify-center">
        <div className="flex flex-col items-center">
            {
                Array.isArray(blogs) && blogs.length > 0 ? (
                    blogs.map(blog => (
                        <BlogCard
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            // createdAt={"2024-04-07"}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
            )}
        </div>
    </div>
    
    )
}