import React, { useState } from 'react';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LoginWelcomeCard from './Cards/LoginWelcomeCard'; // Import the card

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [showLoginCard, setShowLoginCard] = useState(false); // State to control card visibility
    const navigate = useNavigate();

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setShowLanguage(false); // Hide language dropdown if search is shown
    };

    const toggleLanguage = () => {
        setShowLanguage(!showLanguage);
        setShowSearch(false); // Hide search input if language dropdown is shown
    };

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    const handleLoginClick = () => {
        setShowLoginCard(true); // Show the login card
    };

    const handleCloseLoginCard = () => {
        setShowLoginCard(false); // Hide the login card
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <img 
                    src={`${process.env.PUBLIC_URL}/logo512.png`} 
                    alt="Logo"
                    className="logo"
                />
                <span className="logo-text">ATONIXCORP</span>
            </div>
            <div className="nav">
                <div 
                    className="nav-item" 
                    onClick={() => toggleDropdown('developments')}
                    onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('developments')}
                    role="button"
                    tabIndex={0}
                >
                    Developments <FontAwesomeIcon icon={faCaretDown} />
                    {dropdown === 'developments' && (
                        <div className="dropdown">
                            <span 
                                onClick={() => navigate('/developments/project1')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/developments/project1')}
                            >
                                Project 1
                            </span>
                            <span 
                                onClick={() => navigate('/developments/project2')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/developments/project2')}
                            >
                                Project 2
                            </span>
                        </div>
                    )}
                </div>
                <div 
                    className="nav-item" 
                    onClick={() => toggleDropdown('community')}
                    onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('community')}
                    role="button"
                    tabIndex={0}
                >
                    Community <FontAwesomeIcon icon={faCaretDown} />
                    {dropdown === 'community' && (
                        <div className="dropdown">
                            <span 
                                onClick={() => navigate('/community/event1')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/community/event1')}
                            >
                                Event 1
                            </span>
                            <span 
                                onClick={() => navigate('/community/event2')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/community/event2')}
                            >
                                Event 2
                            </span>
                        </div>
                    )}
                </div>
                <div 
                    className="nav-item" 
                    onClick={() => toggleDropdown('products')}
                    onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('products')}
                    role="button"
                    tabIndex={0}
                >
                    Products <FontAwesomeIcon icon={faCaretDown} />
                    {dropdown === 'products' && (
                        <div className="dropdown">
                            <span 
                                onClick={() => navigate('/products/product1')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/products/product1')}
                            >
                                Product 1
                            </span>
                            <span 
                                onClick={() => navigate('/products/product2')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/products/product2')}
                            >
                                Product 2
                            </span>
                        </div>
                    )}
                </div>
                <div 
                    className="nav-item" 
                    onClick={() => toggleDropdown('support')}
                    onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('support')}
                    role="button"
                    tabIndex={0}
                >
                    Support <FontAwesomeIcon icon={faCaretDown} />
                    {dropdown === 'support' && (
                        <div className="dropdown">
                            <span 
                                onClick={() => navigate('/support/faq')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/support/faq')}
                            >
                                FAQ
                            </span>
                            <span 
                                onClick={() => navigate('/support/contact')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/support/contact')}
                            >
                                Contact
                            </span>
                        </div>
                    )}
                </div>
                <div 
                    className="nav-item" 
                    onClick={() => toggleDropdown('company')}
                    onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('company')}
                    role="button"
                    tabIndex={0}
                >
                    Company <FontAwesomeIcon icon={faCaretDown} />
                    {dropdown === 'company' && (
                        <div className="dropdown">
                            <span 
                                onClick={() => navigate('/company/about')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/company/about')}
                            >
                                About Us
                            </span>
                            <span 
                                onClick={() => navigate('/company/careers')} 
                                role="button" 
                                tabIndex={0} 
                                onKeyDown={(e) => e.key === 'Enter' && navigate('/company/careers')}
                            >
                                Careers
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon icon={faSearch} className="icon search-icon" onClick={toggleSearch} />
                {showSearch && (
                    <input type="text" className="search-bar" placeholder="Search..." />
                )}
                <FontAwesomeIcon icon={faGlobe} className="icon translator-icon" onClick={toggleLanguage} />
                {showLanguage && (
                    <select className="translator">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                )}
            </div>
            <button className="cta-button" onClick={handleLoginClick}>
                <span className="cta-text">Log In To Hub</span>
            </button>
            {showLoginCard && <LoginWelcomeCard show={showLoginCard} handleClose={handleCloseLoginCard} />}
        </div>
    );
}

export default Header;