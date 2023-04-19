import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBed } from "react-icons/fa";
import { BiMaleFemale, BiDollar } from "react-icons/bi";
const SingleRoom = () => {
    const singleRoomData = useLoaderData()
    const { id, title, description, img, num_of_bed, people, cost } = singleRoomData;
    console.log(singleRoomData);
    return (
        <div className='my-container mt-5 grid grid-cols-2 gap-5 mb-3'>
            <img className='rounded-lg' src={img} alt="" />
            <div className='flex items-center'>
                <div>
                    <h3 className='text-3xl font-bold'>{title}</h3>
                    <p className='mt-3'>{description}</p>
                    <div className="card-actions flex items-center mx-auto mt-3">
                        <FaBed className='h-6 w-6' />: {num_of_bed}
                        <BiMaleFemale className='h-6 w-6' />: {people}
                        <BiDollar className='h-6 w-6' />: {cost}
                        <Link to='/checkout'><button className="btn btn-sm">Book</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;