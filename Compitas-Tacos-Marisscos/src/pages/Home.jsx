import React, { useState } from 'react';
import '../styles/Home.css';
import Truck from '../public/Truck.svg';



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

            <div alt="picture of Compitas's Food Truck" className="the-truck" >
                <img src={Truck} alt="Truck" />
            </div>

            <div className="Contact-us">
                <h1>Contact Us</h1>
                <p>Feel free to contact us with any questions or comments or for a free quote.</p>
            </div>

            <div>
                <form onSubmit={handleSubmit} className="the-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="comments">Comments:</label>
                        <textarea
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