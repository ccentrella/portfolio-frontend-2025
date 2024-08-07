import React from 'react';

function Hero(props) {
    return (
        <>
            <div className='container'>
                <div className='left-panel'>
                    <div className='profile-pic'>
                        <img src='public/profile.png' alt='profile picture' />
                    </div>
                    <div className='text-content'>
                        <p>&lsquo;Sup? My name is </p>
                        <p className='name'>Chris Centrella.</p>
                    </div>
                </div>
                <div className='right-panel'>
                    <div className='bg-box'></div>
                </div>
            </div>
            <div>
                <h2 className='section-heading'>Industry Experience.</h2>
                <div></div>
            </div>
            <div>
                <h2 className='section-heading'>Technical Experience.</h2>
                <div></div>
            </div>
            <div>
                <h2 className='section-heading'>Causes.</h2>
                <div></div>
            </div>
        </>
    );
}

export default Hero;
