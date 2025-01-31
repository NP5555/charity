import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { FaEthereum } from 'react-icons/fa';

const Charity = () => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [error, setError] = useState('');

    const connectToMetaMask = async () => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                setError('');
            } catch (error) {
                console.error("Error connecting to MetaMask", error);
                setError("Error connecting to MetaMask. Please try again.");
            }
        } else {
            console.error("MetaMask not detected");
            setError("MetaMask not detected. Please install MetaMask.");
        }
    };

    const handleDonate = async () => {
        await connectToMetaMask();
        if (web3 && account) {
            const amount = web3.utils.toWei('0.1', 'ether'); // Example amount to donate
            try {
                await web3.eth.sendTransaction({
                    from: account,
                    to: '0xYourCharityAddressHere', // Replace with your charity address
                    value: amount
                });
                alert('Donation successful!');
                setError('');
            } catch (error) {
                console.error("Error making donation", error);
                setError("Error making donation. Please try again.");
            }
        } else {
            alert('Please connect to MetaMask');
        }
    };

    return (
<div className="p-40 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-200">
        {/* Title */}
        <h1 className="text-2xl font-extrabold text-gray-800 mb-4">✨ Charity Campaign ✨</h1>
        
        {/* Wallet Status */}
        <p className="text-lg font-semibold text-gray-700 bg-gray-100 rounded-lg inline-block">
            Wallet Status:
            {account ? (
                 
                <span className="text-green-600">✅ {account}</span>
            ) : (
                <span className="text-red-500">❌ Not connected</span>
            )}
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 font-semibold mt-3">{error}</p>}

        {/* Connect to MetaMask Button */}
        {!account && (
            <button 
                onClick={connectToMetaMask} 
                className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300 shadow-lg mt-6 w-full"
            >
                🔗 Connect to MetaMask
            </button>
        )}

        {/* Donate Button */}
        <button 
            onClick={handleDonate} 
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition duration-300 shadow-lg mt-4 w-full animate-pulse"
        >
            <FaEthereum className="mr-2 text-2xl" />
            Donate 0.1 ETH
        </button>
    </div>
</div>

    );
};

export default Charity;