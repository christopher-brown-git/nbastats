import React, { useState, useEffect} from 'react';

const UserInput = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    //Handle input change
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    useEffect(() => {
        fetch('http://127.0.0.1:5000/')
        .then(response => console.log(response.text()));
    }, []);

    return (
        <div>
            <label htmlFor="nameInput">Enter Name: </label>
            <input
                type="text"
                id="nameInput"
                value={name}
                onChange={handleInputChange}
                placeholder="Type Player Name Here"
            />
        </div>
    );
};

export default UserInput;