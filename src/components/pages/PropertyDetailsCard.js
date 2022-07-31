import React from 'react';
import { MdBed } from 'react-icons/md';
import { TbBath } from 'react-icons/tb';
import { BsSquare } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';

const PropertyDetailsCard = ({ element }) => {
    const { img, propertyName, address, price, bathrooms, beds, squareFeet } = element || {}
    return (
        <div>
            <div class="card max-w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-full h-[300px] object-cover' src={img} alt={propertyName} />
                </figure>
                <div class="card-body">
                    <div>
                        <div className='flex justify-between items-center'>
                            <h2 class="card-title"><span className='text-[#7b5cf8]'>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>/month</h2>

                            <span className='border-2 border-[#a09ff0] solid xl:p-3 p-2 rounded-full'> 
                                <BiHeart
                                className=' text-[#a09ff0] xl:text-2xl text-[20px] first-line:'
                                />
                            </span>
                        </div>
                        <p className='xl:text-2xl lg:text-xl py-2 font-bold'>{propertyName}</p>
                        <p className='text-[17px] text-[#9a9696]'>{address}</p>
                    </div>
                    <div className="divider"></div>
                    <div class="card-actions gap-1 justify-between ">
                        <div className=''>
                            <p className='flex items-center xl:text-[17px] lg:text-[12px] text-[13px]'>
                                <strong>
                                    <MdBed
                                        className='text-[#a09ff0] '
                                    />
                                </strong>
                                <span className='ml-2'>
                                    {beds} beds
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className='flex items-center xl:text-[17px] lg:text-[12px] text-[13px]'>
                                <TbBath
                                    className='text-[#a09ff0]'
                                />
                                <span className='ml-2'>
                                    {bathrooms} Bathrooms
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className='flex items-center xl:text-[17px] lg:text-[12px] text-[13px]'>
                                <BsSquare
                                    className='text-[#a09ff0]'
                                />
                                <span className='ml-2'>
                                    {squareFeet}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsCard;
