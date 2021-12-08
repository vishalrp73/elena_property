import './property.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Body from '../propertyBody/Body';

const Property = ( {match} ) => {
    
    const [property, setProperty] = useState();

    useEffect(() => {
        axios.post('http://localhost:4000/getProperty', {
            propertyId: match.params.id
        })
        .then (response => {
            setProperty(response.data);
        })
        .catch (err => console.log(err));
    }, [])

    return (
        <div className = 'property-wrapper'>
            {
                property ?
                    <>
                        id: {property.id}<br/>
                        headline: {property.headline}<br/>
                        address: {property.address}<br/>
                        suburb: {property.suburb}<br/>
                        image url: {property.image}<br/>
                        available: {property.availability}<br/>
                        beds: {property.beds}<br/>
                        baths: {property.baths}<br/>
                        parks: {property.parks}<br/>
                        pets: {String(property.pets)}<br/>
                        furnished? {String(property.furnished)}<br/>
                        smoking? {String(property.smoking)}<br/>
                        realtor name: {property.realtor.name}<br/>
                        realtor image url: {property.realtor.realtor_photo}<br/>
                        realtor email: {property.realtor.email}
                    </> : <></>
            }
        </div>
    )

}

export default Property;