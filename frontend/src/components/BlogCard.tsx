import { useState } from "react";

interface BlogProps {
    authorName:string;
    title:string;
    content:string;
    publishedDate: string
}


export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}:BlogProps)=> {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
//     <div className="border rounded-lg my-6 p-4 shadow-md hover:shadow-lg transition-shadow duration-200 min-w-full">
//     <div className="flex items-center mb-2">
//         <Avatar name={authorName} />
//         <div className="ml-2 flex flex-col">
//             <span className="font-medium">{authorName}</span>
//             <span className="font-normal text-slate-500">{publishedDate}</span>
//         </div>
//     </div>
//     <div className="text-xl font-semibold mb-2">{title}</div>
//       <div className="text-md font-thin mb-4">
//                 {isExpanded ? content : content.slice(0, 100) + "..."}
//                  {content.length > 100 && (
//                     <button
//                         className="text-blue-500 underline ml-2"
//                         onClick={() => setIsExpanded(!isExpanded)}
//                     >
//                         {isExpanded ? 'Show Less' : 'Read More'}
//                     </button>
//                  )}
//             </div>
//     <div className="text-slate-400 mb-2">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
//     <div className="bg-slate-100 h-0.5 w-full mb-4"></div>
//     {/* <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200">
//         Read More
//     </button> */}
// </div>

// {/* <div className="flex justify-center w-screen ">
// <div className=" max-w-xl w-full">
//     <div className="border rounded-lg my-6 p-4 shadow-md hover:shadow-lg transition-shadow duration-200 w-full "> 
//         <div className="flex items-center mb-2">
//             <Avatar name={authorName} />
//             <div className="ml-2 flex flex-col">
//                 <span className="font-medium">{authorName}</span>
//                 <span className="font-normal text-slate-500">{publishedDate}</span>
//             </div>
//         </div>
//         <div className="text-xl font-semibold mb-2">{title}</div>
//         <div className="text-md font-thin mb-4">
//             {isExpanded ? content : content.slice(0, 100) + "..."}
//             {content.length > 100 && (
//                 <button
//                     className="text-blue-500 underline ml-2"
//                     onClick={() => setIsExpanded(!isExpanded)}
//                 >
//                     {isExpanded ? 'Show Less' : 'Read More'}
//                 </button>
//             )}
//         </div>
//         <div className="text-slate-400 mb-2">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
//         <div className="bg-slate-100 h-0.5 w-full mb-4"></div>
//     </div>
// </div>
// </div> */}

<div className="flex justify-center w-screen">
<div className="max-w-xl w-full"> {/* Max width with full width */}
    <div className="border rounded-lg my-6 p-4 shadow-md hover:shadow-lg transition-shadow duration-200 w-full"> 
        <div className="flex items-center mb-2">
            <Avatar name={authorName} />
            <div className="ml-2 flex flex-col">
                <span className="font-medium">{authorName}</span>
                <span className="font-normal text-slate-500">{publishedDate}</span>
            </div>
        </div>
        <div className="text-xl font-semibold mb-2">{title}</div>
        <div className="text-md font-thin mb-4">
            {isExpanded ? content : content.slice(0, 100) + "..."}
            {content.length > 100 && (
                <button
                    className="text-blue-500 underline ml-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
            )}
        </div>
        <div className="text-slate-400 mb-2">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
        <div className="bg-slate-100 h-0.5 w-full mb-4"></div>
    </div>
</div>
</div>
    )

    
    function Avatar({name}:{name:string}){
        return <div className="rounded-full h-10 inline-flex w-10 bg-slate-200 flex justify-center mt-1 mr-2">
        <div className="flex flex-col justify-center h-full text-xl">
            {name[0]}
        </div>
    </div>
    }
}