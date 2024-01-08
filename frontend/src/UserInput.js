import React, { useState } from 'react';

const UserInput = () => {
    const [name, setName] = useState('');

    //Handle input change
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

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