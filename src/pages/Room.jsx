import React from 'react';
import { FaBed } from "react-icons/fa"; 
import { BiMaleFemale,BiDollar } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Room = ({room}) => {
    
    const {id,title,description,img,num_of_bed,people,cost}= room;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {title}
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h2>
                                <p>{description.slice(0,150)}...</p>
                                <div className="card-actions flex items-center mx-auto">
                                    <FaBed className='h-6 w-6'/>: {num_of_bed}
                                    <BiMaleFemale className='h-6 w-6'/>: {people}
                                    <BiDollar className='h-6 w-6'/>: {cost}
                                    <Link to={`rooms-details/${id}`}><button className="btn btn-sm">Book</button></Link>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Room;