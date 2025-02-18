import React, { useState } from 'react';
import '../styles/Home.css';
import Truck from '../public/Truck.svg';
import aguaChileBowl from '../public/bowl.png';
import shrimpTaco from '../public/shrimp-taco3.jpg';
import shrimpBowl from '../public/shrimp-bowl.png';
import cocktail from '../public/cup.png';
import chips from '../public/chips.jpg';
import charola1 from '../public/charola1.png';
import charola2 from '../public/charola2.png';
import avoBowl from '../public/avo-bowl.png';

function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Comments:', comments);
    };

    return (
        <div>

                <div className='banner'>
                    <marquee className="the-marquee">   
                        <span style={{ wordSpacing: '95px', display: 'flex', alignItems: 'center' }}>
                            <ul className="the-list">
                                <li>TACOS</li>
                                <li>CEVICHE</li>
                                <li>AGUACHILES</li>
                                <li>COCTELES</li>
                                <li>CHAROLAS</li>
                                <li>DRINKS</li>
                                <li>CONTACT US FOR LARGE ORDERS, CHAROLAS OR CATERING</li>
                            </ul>
                        </span>
                        </marquee>
                </div>

            <div alt="picture of Compitas's Food Truck" className="the-truck" >
                <img src={Truck} alt="Truck" />
            </div>

            <div className="photo-row">
                    <img src={aguaChileBowl} alt="Aguachile Bowl" />
                    <img src={avoBowl} alt="Avo Bowl" />
                    <img src={cocktail} alt="Cocktail" />
                    <img src={charola1} alt="Charola" />
                    <img src={charola2} alt="Charola" />
            </div>

            <div className="contact-us">
                <h1>Contact Us</h1>
                <p>Feel free to contact us with any questions or comments or for a free quote.</p>
            </div>

            <div >
                <form onSubmit={handleSubmit} className="the-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            style={{ width: '25%', height: '50px', fontSize: '35px' }}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            style={{ width: '25%', height: '50px', fontSize: '35px' }}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="comments">Comments:</label>
                        <textarea
                        style={{ width: '25%', height: '300px', fontSize: '35px' }}
                            id="comments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Home;