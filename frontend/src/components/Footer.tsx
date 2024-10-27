import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto h-full text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} @gyanvendrasingh. All rights reserved.
                    
                </p>
                <div className="space-x-4 mb-4 md:mb-0 text-center py-4" >
                        <a href="#" className="hover:text-green-400">Privacy Policy</a>
                        <a href="#" className="hover:text-green-400">Terms of Service</a>
                        <a href="#" className="hover:text-green-400">Contact</a>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;