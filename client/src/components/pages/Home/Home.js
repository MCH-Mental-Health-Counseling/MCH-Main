import React from 'react';
import "./Home.scss";


const Home = () => {
    return (
        <div>
            <div className='home_container'>
                <h2>Mental health
                    <span>is just as important as</span>
                    Physical Helath
                </h2>
                <p>
                    Mental health and mental illness impact nearly every family, yet stigma still causes so much shame, fear, doubt, isolation and misunderstanding," says Dave Eldredge, HMHI. "The shame caused by stigma keeps people from seeking treatment so richly needed and deserved
                </p>
                <div className='CardsComponent-main-container'>
                    <div className='remidy_methos'>
                        <img src={require("../../../Assets/Mindfulness.webp")} alt=" " />
                        <h3>MIND FULL NESS</h3>
                        <p>It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.</p>
                    </div>
                    <div className='remidy_methos'>
                        <img src={require("../../../Assets/yoga1.jpg")} alt=" " />
                        <h3>HOME YOGA</h3>
                        <p>It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.</p>
                    </div>
                    <div className='remidy_methos'>
                        <img src={require("../../../Assets/mindfit.avif")} alt=" " />
                        <h3>MIND FITNESS</h3>
                        <p>It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.</p>
                    </div>
                    <div className='remidy_methos'>
                        <img src={require("../../../Assets/excercise.webp")} alt=" " />
                        <h3>REGULAR EXERCISE</h3>
                        <p>
                            It began as a spiritual practice but has become popular as a way of promoting physical and mental well-being.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
