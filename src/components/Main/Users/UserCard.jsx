import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { HiBuildingOffice } from 'react-icons/hi2';
import { TbWorldWww } from 'react-icons/tb';
import { Link } from 'react-router';

const UserCard = ({ user }) => {
    // console.log(user);
    return (
        <div className='border border-dotted rounded-md p-4'>
            <div className='flex items-center gap-2'>
                <FaUserCircle size={40} />
                <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p>{user.username}</p>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex items-center gap-1'>
                    <FaPhoneAlt />
                    <p>{user.phone}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <TbWorldWww />
                    <a className='underline cursor-pointer'>{user.website}</a>
                </div>
                <div className='flex items-center gap-1'>
                    <HiBuildingOffice />
                    <p>{user.company.name}</p>
                </div>
            </div>

            <Link to={`/users/${user.id}`}>
                <button className='btn btn-primary btn-outline w-full mt-4'>Show Details</button>
            </Link>
        </div>
    );
};

export default UserCard;