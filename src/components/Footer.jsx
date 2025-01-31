import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Charity App</h2>
                        <p className="text-sm">Making the world a better place</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-md text-gray-800 mb-4 md:mb-0 md:mr-4 bg-white"
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm">&copy; 2025 Charity App by NP5555 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;