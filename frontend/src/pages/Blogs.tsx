import { BlogCard } from "../components/BlogCard"
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Skeleton } from "../components/Skeleton";


interface Blog{
    content:string;
    title:string;
    name:string;
    author:{
        name:string
    }
}

export const Blogs = () => {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
      axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
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
        <div className="">
        {/* {Array.isArray(blogs) && blogs.length > 0 ? (
            {blogs.map(blog => <BlogCard
           authorName={blog.author.name}
           title={blog.title}
           content={blog.content}
           publishedDate={"2021-01-05"}
        />)})
        : */}
          {Array.isArray(blogs) && blogs.length > 0 ? (
                    blogs.map(blog => (
                        <BlogCard
                            // key={blog.id} // Ensure you have a unique key
                            authorName={blog.author.name||"Anoymnus"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2021-01-05"}
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