import React, { useEffect, useState } from 'react';
import Room from './Room';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    //destructuring
    useEffect(() => {
        fetch('http://localhost:5000/rooms-details/')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div >
            <div className='grid grid-cols-3 p-5 px-5'>
                {
                    rooms.map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Home;