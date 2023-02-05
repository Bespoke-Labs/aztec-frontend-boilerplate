import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h1 className="title">Giftly</h1>
            <p className="subtitle">Easily Gift Money to People Anonymously</p>
            <p className="subtitle">Enter an address to send money to.</p>
            <div className="search-container">
                <input type="text" placeholder="Search addresses" />
            </div>
        </div>
    );
};

export default HomePage;
