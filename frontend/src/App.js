import React from 'react';
import UserInput from './UserInput';
import Title from './Title';

const App = () => {
    return (
        <div className="flex flex-col items-center">
            <Title/>
            <UserInput/>
        </div>
    );
};

export default App;