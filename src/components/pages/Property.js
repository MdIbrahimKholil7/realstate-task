import React, { useState } from 'react';
import PropertyDetails from './PropertyDetails';

const Property = () => {

    const [destination, setDestination] = useState('')
    const [price, setPrice] = useState(0)
    const [property, setProperty] = useState('')

    const handleDestination = event => {
        setDestination(event.target.value)
    }
    const handlePrice = event => {
        setPrice(event.target.value)
    }
    const handleProperty = event => {
        setProperty(event.target.value)
    }

    console.log(destination,price,property)

    return (
        <div className='mt-10'>

            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold'>Search properties to rent</h1>
                <div>
                    <select class="border-[#d0b9f3] border-solid border-2 select">
                        <option disabled selected>Who shot first?</option>
                    </select>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-5 shadow-2xl py-7 mt-10 rounded-md'>
                    <div className='border-r-2 px-7   border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>Location</p>
                        <select onClick={handleDestination} className='border-0 font-bold' >
                            <option selected className='outline-none border-0'>New York,USA</option>
                            <option className='outline-none border-0'>Florida,USA</option>
                            <option className='outline-none border-0'>Seattle,USA</option>
                            <option className='outline-none border-0'>Miami,USA</option>
                        </select>
                    </div>
                    <div className='border-r-2 pl-7 border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>When</p>

                    </div>
                    <div className='border-r-2 pl-7 border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>Price</p>
                        <select onClick={handlePrice} className='border-0 font-bold' >
                            <option>500-2500</option>
                            <option>2600-4500</option>
                        </select>
                    </div>
                    <div className=' border-r-2 pl-7 border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>Property Type</p>
                        <select onClick={handleProperty} className='border-0 font-bold'>
                            <option>Houses</option>
                            <option>Flat</option>
                        </select>
                    </div>
                    <div className=' pl-7 pr-2'>
                        <button className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </div>

            <div>
                <PropertyDetails
                    property={property}
                    price={price}
                    destination={destination}
                />
            </div>

        </div>
    );
};

export default Property;