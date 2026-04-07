import React from 'react';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import { FaLocationDot} from 'react-icons/fa6';
import { HiBuildingOffice } from 'react-icons/hi2';
import { TbWorldWww } from 'react-icons/tb';
import { useLoaderData } from 'react-router';

const UserCardDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <p className='underline mb-4'>User Details:</p>
            <div className='border border-dotted rounded-md p-4'>
                <div className='flex border border-dotted p-1 rounded-md items-center gap-2 mb-2'>
                    <FaUserCircle size={40} />
                    <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p>{user.username}</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='border border-dotted rounded-md p-2'>
                        <div className='flex items-center gap-1'>
                            <FaLocationDot /> 
                            <p>Address</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Street:</span> {user?.address?.street}</p>
                            <p><span className='font-semibold'>City:</span> {user?.address?.city}</p>
                            <p><span className='font-semibold'>Zipcode:</span> {user?.address?.zipcode}</p>
                        </div>
                    </div>
                    <div className='border border-dotted rounded-md p-2'>
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
                </div>
            </div>
        </div>
    );
};

export default UserCardDetails;