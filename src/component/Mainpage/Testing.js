import React, { useEffect, useState } from 'react';

const Testing = () => {
    const [value, setvlaue] = useState([]);
    console.log(value)

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setvlaue(data))
            .catch(err => console.error(err));
    }, [])


    return (
        <div>
            <h1 className='flex items-center '><p className='text-2xl font-serif font bold mx-5'>Step 1 :</p>   Go to customer Dashbord {`->`} create account {'->'} provide the information (for BO get id )</h1>
            <h1
                className='flex items-center '
            ><p className='text-2xl font-serif font bold mx-5'>Step 2 :</p> Then apply head of sattlement use BO ID </h1>

        </div>
    );
};

export default Testing;