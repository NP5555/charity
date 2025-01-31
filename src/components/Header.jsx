import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold mx-auto">CharityApp</h1>
                <button 
                    className="md:hidden text-white" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="md:flex md:space-x-4">
                        {/* <li className="my-2 md:my-0"><Link to="/" className="block px-4 py-2 hover:bg-blue-700 rounded">Home</Link></li>
                        <li className="my-2 md:my-0"><Link to="/about" className="block px-4 py-2 hover:bg-blue-700 rounded">About Us</Link></li>
                        <li className="my-2 md:my-0"><Link to="/projects" className="block px-4 py-2 hover:bg-blue-700 rounded">Projects</Link></li>
                        <li className="my-2 md:my-0"><Link to="/contact" className="block px-4 py-2 hover:bg-blue-700 rounded">Contact</Link></li>
                        <li className="my-2 md:my-0"><Link to="/donate" className="block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded">Donate</Link></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;