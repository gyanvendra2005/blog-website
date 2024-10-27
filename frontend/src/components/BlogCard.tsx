// import { useState } from "react";

// interface BlogProps {
//     authorName:string;
//     title:string;
//     content:string;
//     createdAt:Date
// }


// export const BlogCard = ({
//     authorName,
//     title,
//     content,
//     createdAt
// }:BlogProps)=> {

//     const [isExpanded, setIsExpanded] = useState(false);
//     const [isBookmarked, setIsBookmarked] = useState(false);

//     const toggleBookmark = () => {
//         setIsBookmarked(!isBookmarked);
//     };

//     return (
// <div className="flex justify-center w-screen">
// <div className="max-w-xl w-full"> {/* Max width with full width */}
//     <div className="border rounded-lg my-6 p-4 shadow-md hover:shadow-lg transition-shadow duration-200 w-full"> 
//         <div className="flex items-center mb-2">
//             <Avatar name={authorName} />
//             <div className="ml-2 flex flex-col">
//                 <span className="font-medium">{authorName}</span>
//                 <span className="font-normal text-slate-500">
//                     {createdAt} {/* Format date here */}
//                 </span>
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
//         <button 
//             className={`text-xl ${isBookmarked ? 'text-yellow-500' : 'text-gray-500'}`}
//             onClick={toggleBookmark}
//         >
//             {isBookmarked ? '★' : '☆'}
//         </button>
//     </div>
// </div>
// </div>
//     )

    
//     function Avatar({name}:{name:string}){
//         return <div className="rounded-full h-10 inline-flex w-10 bg-slate-200 flex justify-center mt-1 mr-2">
//         <div className="flex flex-col justify-center h-full text-xl">
//             {name[0]}
//         </div>
//     </div>
//     }
// }


import { useState } from "react";

interface BlogProps {
    authorName: string;
    title: string;
    content: string;
    createdAt: Date;
    averageRating?: number; // Optional average rating
}

export const BlogCard = ({
    authorName,
    title,
    content,
    createdAt,
    averageRating = 0, // Default to 0 if no average rating is provided
}: BlogProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [userRating, setUserRating] = useState(0); // State for user rating

    // Function to handle star click
    const handleStarClick = (rating: number) => {
        setUserRating(rating);
    };

    return (
        <div className="flex justify-center w-screen">
            <div className="max-w-xl w-full"> {/* Max width with full width */}
                <div className="border rounded-lg my-6 p-4 shadow-md hover:shadow-lg transition-shadow duration-200 w-full"> 
                    <div className="flex items-center mb-2">
                        <Avatar name={authorName} />
                        <div className="ml-2 flex flex-col">
                            <span className="font-medium">{authorName}</span>
                            <span className="font-normal text-slate-500">
                                  
                                {createdAt}
                            </span>
                        </div>
                        <button
                            className={`ml-auto ${isBookmarked ? 'text-blue-500' : 'text-gray-400'}`}
                            onClick={() => setIsBookmarked(!isBookmarked)}
                            aria-label={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
                        >
                            {isBookmarked ? '★' : '☆'} {/* Bookmark star */}
                        </button>
                    </div>
                    <div className="text-xl font-semibold mb-2">{title}</div>

                    {/* Review Stars Section */}
                    <div className="flex mb-2">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span
                                key={index}
                                className={`cursor-pointer text-xl ${index < (userRating || averageRating) ? 'text-yellow-500' : 'text-gray-300'}`}
                                onClick={() => handleStarClick(index + 1)}
                                onMouseEnter={() => setUserRating(index + 1)} // Highlight on hover
                                onMouseLeave={() => setUserRating(0)} // Reset on mouse leave
                                title={`Rate ${index + 1} star${index === 0 ? '' : 's'}`} // Tooltip
                            >
                                {index < (userRating || averageRating) ? '★' : '☆'} {/* Filled or empty star */}
                            </span>
                        ))}
                    </div>

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
    );
}

function Avatar({ name }: { name: string }) {
    return (
        <div className="rounded-full h-10 inline-flex w-10 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                {name[0]}
            </div>
        </div>
    );
}
