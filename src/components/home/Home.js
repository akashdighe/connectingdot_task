// Home.js
import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Home.css';
import Services from '../services/Services';
import Solutions from '../solutions/Solutions'
export default function Home() {
    const [currentPage, setCurrentPage] = useState('home');

    const handlePages = (data) => {
        setCurrentPage(data);
        console.log(data); // Log the selected page when it changes
    };
    
    // Add useEffect to update background color when currentPage changes
    useEffect(() => {
        // Set the background color based on currentPage
        document.body.style.background = getPageBackgroundGradient(currentPage);
    }, [currentPage]);

    // Helper function to determine linear gradient based on currentPage
    const getPageBackgroundGradient = (page) => {
        switch (page) {
            case 'home':
                return 'linear-gradient(to right,  #cbe3f7 0%, #FFFFFF 25%)';
            case 'Services':
                return 'linear-gradient(to left,  #f5c1f2 0%, #FFFFFF 30%)'; // Modify with appropriate colors
            case 'Solutions':
                return 'linear-gradient(to right, #cbe3f7 0%, #FFFFFF 25%)'; // Modify with appropriate colors
            default:
                return 'white'; // Set a default color if needed
        }
    };

    return (
        <div className='total-home-container'>
            <Navbar handlePages={handlePages} />
            {currentPage === "home" && (
                <div className='text-container'>
                    <span className='home-subtext'>Marketing Is An </span><span className='home-text'>Art;</span>
                    <div className='home-text'> Easy To Copy But Hard To Excel.</div>
                </div>
            )}
            {currentPage === "Services" && <div><Services /></div>}
            {currentPage === "Solutions" && <div>< Solutions/></div>}
        </div>
    );
}
