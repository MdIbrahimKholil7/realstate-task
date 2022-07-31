import React, { useEffect, useState } from 'react';
import PropertyDetailsCard from './PropertyDetailsCard';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { MdDateRange } from 'react-icons/md';
const Property = () => {

    const [destination, setDestination] = useState('New York,USA')
    const [price, setPrice] = useState('500-2500')
    const [property, setProperty] = useState('Houses')
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])
    // fetching data from data.json file 
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setFilterData(data)
                setData(data)
            })

    }, [])

    // filter data 
    const handleSearch = (property, price, destination) => {

        const number = price.split('-')
        // filter data by condition 
        const filterResult = data.filter(element => {
            return element.location.includes(destination) && element.price >= Number(number[0]) && element.price <= Number(number[1]) && element.propertyType.toLowerCase().includes(property.toLowerCase())

        })

        setFilterData(filterResult)
    }

    const handleDestination = event => {
        setDestination(event.target.value)
    }
    const handlePrice = event => {
        setPrice(event.target.value)
    }
    const handleProperty = event => {
        setProperty(event.target.value)
    }

    const handleDate = () => {
        setOpenDate(!openDate)
    }
    console.log(date)
    return (
        <div className='mt-10'>

            <div className='flex md:justify-between flex-col md:flex-row items-center'>
                <h1 className='lg:text-4xl md:text-2xl sm:text-xl text-[18px] font-bold md:mb-0 mb-5'>Search properties to rent</h1>
                <div>
                    <select class="border-[#d0b9f3] border-solid border-2 select">
                        <option disabled selected>Who shot first?</option>
                    </select>
                </div>
            </div>

            <div>
                <div className='grid lg:grid-cols-5 grid-cols-1 shadow-2xl py-7 mt-10 rounded-md'>
                    <div className='lg:border-r-2 border-r-[0] px-7 border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>Location</p>
                        <select onClick={handleDestination} className='border-0 font-bold' >
                            <option selected className='outline-none border-0'>New York,USA</option>
                            <option className='outline-none border-0'>Florida,USA</option>
                            <option className='outline-none border-0'>Seattle,USA</option>
                            <option className='outline-none border-0'>Miami,USA</option>
                        </select>
                    </div>
                    <div className='lg:border-r-2 border-r-[0] pl-7 border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>When</p>
                        <div onClick={handleDate} className='flex justify-between items-center cursor-pointer relative'>
                            <p className='text-[#131212] font-bold'>Select Move-In Date</p>
                            <span>
                                <MdDateRange
                                    className='text-[#a09ff0] text-2xl'

                                />
                            </span>
                           {
                            openDate &&  <div
                            className='absolute top-[52px] left-0 z-10'
                            >
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                              
                            />
                        </div>
                           }
                        </div>
                    </div>
                    <div className='lg:border-r-2 border-r-[0] pl-7 border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>Price</p>
                        <select onClick={handlePrice} className='border-0 font-bold' >
                            <option>500-2500</option>
                            <option>2600-4500</option>
                        </select>
                    </div>
                    <div className=' lg:border-r-2 border-r-[0] pl-7 border-[#d0b9f3] pr-2'>
                        <p className='text-[#bcb8b8] pb-2'>Property Type</p>
                        <select onClick={handleProperty} className='border-0 font-bold'>
                            <option>Houses</option>
                            <option>Flat</option>
                        </select>
                    </div>
                    <div className=' pl-7 pr-7 flex justify-end'>
                        <button onClick={() => handleSearch(property, price, destination)} className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </div>

            <div className='my-40'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9'>
                    {
                        filterData?.map((element, index) => <PropertyDetailsCard
                            key={index}
                            element={element}
                        />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Property;