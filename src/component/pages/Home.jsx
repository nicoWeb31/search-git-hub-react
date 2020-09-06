import React from 'react';
import Seaerch from '../search/Seaerch';
import User from '../users/User';


const Home = () => {
    return (
        <>
            <div className="container">
                <Seaerch />
                <User />
            </div>
        </>
    );
}

export default Home;