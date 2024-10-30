// import React from 'react';

// const HomePage: React.FC = () => {
//     return (
//         <div className="flex flex-col items-center justify-center p-8">
//             <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
//             <p className="text-lg mb-6 text-center max-w-md">
//                 This is a platform where you can share your thoughts, ideas, and stories with the world.
//                 Whether you’re a seasoned writer or just getting started, our community is here to support you.
//             </p>
//             <p className="text-lg mb-6 text-center max-w-md">
//                 Join us to explore a variety of topics, connect with other writers, and unleash your creativity.
//                 Sign up today to start writing!
//             </p>
//             <a
//                 href="/signup"
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//             >
//                 Sign Up
//             </a>
//         </div>
//     );
// };

// export default HomePage;


import React from 'react';

// Dummy authentication state (replace this with actual authentication logic)
let isLoggedIn = false; // Change this to true to simulate a logged-in user
const token =localStorage.getItem("token");
if(token){
    isLoggedIn = !isLoggedIn
}

const HomePage: React.FC = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Blog-App</h1>
            <p className="text-lg mb-6 text-center max-w-md">
                This is a platform where you can share your thoughts, ideas, and stories with the world.
                Whether you’re a seasoned writer or just getting started, our community is here to support you.
            </p>
            <p className="text-lg mb-6 text-center max-w-md">
                Join us to explore a variety of topics, connect with other writers, and unleash your creativity.
                Sign up today to start writing!
            </p>
            {isLoggedIn ? (
                <a
                    href="/blogs"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    See blogs
                </a>
            ) : (
                <a
                    href="/signup"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Sign Up
                </a>
            )}
        </div>
    );
};

export default HomePage;

