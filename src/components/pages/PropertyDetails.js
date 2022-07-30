import React, { useEffect, useState } from 'react';
import PropertyDetailsCard from './PropertyDetailsCard';

const PropertyDetails = ({ property, price, destination }) => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setFilterData(data)
                setData(data)
            })

    }, [])


    return (
        <div className='mt-40'>
            <div className='grid grid-cols-3 gap-9'>
                {
                    filterData.map((element, index) => <PropertyDetailsCard
                        key={index}
                        element={element}
                    />)
                }
            </div>
        </div>
    );
};

export default PropertyDetails;