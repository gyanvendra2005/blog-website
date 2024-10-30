// import { LoginComponent } from "../components/LoginComponent"
// import { Quote } from "../components/Quote"

// export const Signin = () => {
//     const token = localStorage.getItem("token");
//     return (
//         <div className="grid grid-rows-2 md:grid-cols-2 overflow-hidden">
//                 <div>
//                   {
//                     if(!token){
//                         <LoginComponent type="signin" />
//                     }
//                     else{
//                         you are Already logged in
//                     }
//                   }
//                 </div>
//                 <div>
//                    <Quote />
//                 </div>
//             </div>
//     )
// }

import { LoginComponent } from "../components/LoginComponent";
import { Quote } from "../components/Quote";

export const Signin: React.FC = () => {
    const token = localStorage.getItem("token");

    return (
        <div className="grid grid-rows-2 h-screen md:grid-cols-2 overflow-hidden">
            <div>
            {/* <h2 className="text-3xl font-bold text-center mb-6">Welcome Back!</h2> */}
                {!token ? (
                    <LoginComponent type="signin" />
                ) : (
                     <div className="">
                        <p className="text-lg text-center  text-green-600">
                          You are already logged in.
                         </p>
                     </div>
                )}
            </div>
            <div>
                <Quote />
            </div>
        </div>
    );
};

// import React from "react";
// import { LoginComponent } from "../components/LoginComponent";
// import { Quote } from "../components/Quote";

// export const Signin: React.FC = () => {
//     const token = localStorage.getItem("token");

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/background.jpg")' }}>
//             <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
//                 <h2 className="text-3xl font-bold text-center mb-6">Welcome Back!</h2>
//                 <div className="mb-4">
//                     {!token ? (
//                         <>
//                             <LoginComponent type="signin" />
//                             <p className="text-sm text-center mt-4 text-gray-600">
//                                 Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//                             </p>
//                         </>
//                     ) : (
//                         <p className="text-lg text-center text-green-600">
//                             You are already logged in.
//                         </p>
//                     )}
//                 </div>
//                 <div className="mt-4">
//                     <Quote />
//                 </div>
//             </div>
//         </div>
//     );
// };
