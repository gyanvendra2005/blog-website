export const Skeleton = ()=>{
    
return (

    <div className="flex justify-center w-screen">
    <div className="max-w-xl w-full"> {/* Max width with full width */}
        <div className="border rounded-lg my-6 p-4 shadow-md hover:shadow-lg transition-shadow duration-200 w-full"> 
            <div className="flex items-center mb-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                <div className="ml-2 flex flex-col">
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="text-md font-thin mb-4">
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            </div>
            <div className="text-slate-400 mb-2"></div>
            <div className="bg-slate-100 h-0.5 w-full mb-4"></div>
        </div>
    </div>
    </div>
)


}