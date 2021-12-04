import './search.css';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import map from '../../img/static-map.png';
import PropertyPanel from '../housePanel/propertyPanel';


const Search = () => {

    const [open, setOpen] = useState(true);
    const [recent, setRecent] = useState(true);
    const [filtered, setFiltered] = useState();
    const [properties, setProperties] = useState();

    const [suburb, setSuburb] = useState('Massey');
    const [botPrice, setBotPrice] = useState(200);
    const [topPrice, setTopPrice] = useState(1200);
    const [beds, setBeds] = useState(1);
    const [baths, setBaths] = useState(1);
    const [pets, setPets] = useState(true);
    const [parks, setParks] = useState(true);
    const [furnish, setFurnish] = useState(true);
    const [smoking, setSmoking] = useState(true);

    const [displayObj, setDisplayObj] = useState();
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:4000/properties')
        .then (response => response.json())
        .then (json => setProperties(json))
        .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        setDisplayObj();
        let conditions = {
            suburb: '',
            lowPrice: 0,
            highPrice: 0,
            beds: 0,
            baths: 0,
            pets: false,
            parks: false,
            furnish: false,
            smoking: false,
        };
        const filters = [suburb, botPrice, topPrice, beds, baths, pets, parks, furnish, smoking];
        filters.forEach((item, index) => {
            if (item != undefined && item != false) {
                if (index === 0) {
                    conditions.suburb = suburb;
                } else if (index === 1) {
                    conditions.lowPrice = botPrice;
                } else if (index === 2) {
                    conditions.highPrice = topPrice;
                } else if (index === 3) {
                    conditions.beds = beds;
                } else if (index === 4) {
                    conditions.baths = baths;
                } else if (index === 5) {
                    conditions.pets = pets;
                } else if (index === 6) {
                    conditions.parks = parks;
                } else if (index === 7) {
                    conditions.furnish = furnish;
                } else if (index === 8) {
                    conditions.smoking = smoking;
                }
            }
            else {
                console.log('filter not applied');
            }
        })
        setDisplayObj(conditions);

    }, [suburb, botPrice, topPrice, beds, baths, pets, parks, furnish, smoking]);

    const handleSearch = () => {
        setRecent(false);
        console.log(displayObj)
        const filteredProperties = [];
        properties.forEach(property => {
            if ((property.suburb === displayObj.suburb) &&
            (property.price >= displayObj.lowPrice && property.price <= displayObj.highPrice) &&
            (property.beds >= displayObj.beds) &&
            (property.baths >= displayObj.baths) &&
            (property.pets === displayObj.pets) &&
            (property.availParks === displayObj.parks) &&
            (property.furnished === displayObj.furnish) &&
            (property.smoking === displayObj.smoking)) {
                filteredProperties.push(property);
                setFiltered(filteredProperties)
            } else {
                console.log('house not matched')
            }
        })
    }


    const handleChange = (e, id) => {
        if (id === 'suburb') {
            setSuburb(e)
        } else if (id === 'bot-price') {
            setBotPrice(e)
        } else if (id === 'top-price') {
            setTopPrice(e)
        } else if (id === 'bedrooms') {
            setBeds(e)
        } else if (id === 'bathrooms') {
            setBaths(e)
        } else if (id === 'pets') {
            !pets ? setPets(true) : setPets(false)
        } else if (id === 'parks') {
            !parks ? setParks(true) : setParks(false)
        } else if (id === 'furnish') {
            !furnish ? setFurnish(true) : setFurnish(false)
        } else if (id === 'smoking') {
            !smoking ? setSmoking(true) : setSmoking(false)
        }

    }

    const toggleStyle = () => {
        open ? setOpen(false) : setOpen(true);
    }

    const openProperty = (id) => {
        console.log(id);
        history.push('/property/' + id);
    }

    const handleSort = () => {
        filtered.forEach(property => console.log(property));
    }

    return (
        <div className = 'body-container'>

        <div className = 'search-wrapper'>

                <div className = 'search-core-container'>
                    <div className = 'google-map-container' style = {{display: open ? 'flex' : 'none'}}>
                        <img src = { map } className = 'google-map-img' />
                    </div>

                    <div className = 'search-func-container'
                        style = {{width: open ? '50%' : '100%', flexDirection: open ? 'column' : 'row'}} >
                            {
                                open ?
                                    <>
                                    <div className = 'top_bar-container'>
                                        <h2 className = 'search-title'>Search Listings</h2>
                                        <h2 className = 'close__bar' onClick = {() => toggleStyle()}>^</h2>
                                    </div>
                                    </>
                                : <></>
                            }
                        

                        <div id = 'suburb-container' className = 'field-container' style = {{margin: open ? '5px auto' : '20px'}} >
                            <h5 className = 'container-title'>Suburb</h5>
                            <FormControl fullWidth>
                                <Select labelId = 'suburb-label-id' id = 'suburb-select'
                                    value = { suburb } onChange = {(e) => handleChange(e.target.value, 'suburb')}
                                    className = 'select-container'>
                                        <MenuItem value = 'Auckland CBD'>Auckland CBD</MenuItem>
                                        <MenuItem value = 'Howick'>Howick</MenuItem>
                                        <MenuItem value = 'Manukau City'>Manukau City</MenuItem>
                                        <MenuItem value = 'Massey'>Massey</MenuItem>
                                        <MenuItem value = 'Sunnynook'>Sunnynook</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div id = 'price-container' className = 'field-container' style = {{margin: open ? '5px auto' : '20px'}} >
                            <h5 className = 'container-title'>Price Weekly</h5>
                            <div className = 'price-wrap'>
                            <FormControl className = 'price-form'>
                                <Select labelId = 'bot-price-label-id' id = 'bot-price-select'
                                    value = { botPrice } onChange = {(e) => handleChange(e.target.value, 'bot-price')}
                                    className = 'price-select-container' >
                                        <MenuItem value = {200}>$200</MenuItem>
                                        <MenuItem value = {300}>$300</MenuItem>
                                        <MenuItem value = {400}>$400</MenuItem>
                                        <MenuItem value = {500}>$500</MenuItem>
                                        <MenuItem value = {600}>$600</MenuItem>
                                        <MenuItem value = {700}>$700</MenuItem>
                                        <MenuItem value = {800}>$800</MenuItem>
                                        <MenuItem value = {900}>$900</MenuItem>
                                        <MenuItem value = {1000}>$1000</MenuItem>
                                        <MenuItem value = {1100}>$1100</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className = 'price-form'>
                                <Select labelId = 'top-price-label-id' id = 'top-price-select'
                                    value = { topPrice } onChange = {(e) => handleChange(e.target.value, 'top-price')}
                                    className = 'top-price-select-container' >
                                        <MenuItem value = {300}>$300</MenuItem>
                                        <MenuItem value = {400}>$400</MenuItem>
                                        <MenuItem value = {500}>$500</MenuItem>
                                        <MenuItem value = {600}>$600</MenuItem>
                                        <MenuItem value = {700}>$700</MenuItem>
                                        <MenuItem value = {800}>$800</MenuItem>
                                        <MenuItem value = {900}>$900</MenuItem>
                                        <MenuItem value = {1000}>$1000</MenuItem>
                                        <MenuItem value = {1100}>$1100</MenuItem>
                                        <MenuItem value = {1200}>$1200</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
                        </div>

                        <div id = 'util-container' className = 'field-container' style = {{margin: open ? '5px auto' : '20px'}} >
                            <div className = 'util-wrap'>
                                <h5 className = 'container-title'>Bedrooms</h5>
                                <FormControl fullWidth>
                                    <Select labelId = 'bedrooms-label-id' id = 'bedrooms-select' className = 'utils-select'
                                        value = { beds } onChange = {(e) => handleChange(e.target.value, 'bedrooms')}>
                                            <MenuItem value = { 1 } >1+</MenuItem>
                                            <MenuItem value = { 2 } >2+</MenuItem>
                                            <MenuItem value = { 3 } >3+</MenuItem>
                                            <MenuItem value = { 4 } >4+</MenuItem>
                                            <MenuItem value = { 5 } >5+</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className = 'util-wrap' id = 'bath-wrap'>
                                <h5 className = 'container-title'>Bathrooms</h5>
                                <FormControl fullWidth>
                                    <Select labelId = 'bathrooms-label-id' id = 'bathrooms-select' className = 'bath-select'
                                        value = { baths } onChange = {(e) => handleChange(e.target.value, 'bathrooms')}>
                                            <MenuItem value = { 0 } >Any</MenuItem>
                                            <MenuItem value = { 1 } >1+</MenuItem>
                                            <MenuItem value = { 2 } >2+</MenuItem>
                                            <MenuItem value = { 3 } >3+</MenuItem>
                                            <MenuItem value = { 4 } >4+</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className = 'bottom-wrapper' style = {{margin: open ? '10px auto' : '0px'}}>
                            <div className = 'extras-container'>
                                <div className = 'check-input-container'>
                                    <input type = 'checkbox' className = 'extras-check' value = 'pets' defaultChecked
                                        onClick = { (e) =>  handleChange(e.target.value, 'pets')} />
                                    <p className = 'check-title'>Pet Friendly</p>
                                </div>

                                <div className = 'check-input-container'>
                                    <input type = 'checkbox' className = 'extras-check' value = 'parks' defaultChecked
                                        onClick = { (e) => handleChange(e.target.value, 'parks')} />
                                    <p className = 'check-title'>Car Park Available</p>
                                </div>

                                <div className = 'check-input-container'>
                                    <input type = 'checkbox' className = 'extras-check' value = 'furnish' defaultChecked
                                        onClick = { (e) => handleChange(e.target.value, 'furnish')} />
                                    <p className = 'check-title'>Fully Furnished</p>
                                </div>

                                <div className = 'check-input-container'>
                                    <input type = 'checkbox' className = 'extras-check' value = 'smoking' defaultChecked
                                        onClick = { (e) => handleChange(e.target.value, 'smoking') } />
                                    <p className = 'check-title'>Smoking Allowed</p> 
                                </div>
                                
                            </div>
                            {
                                open ?
                                    <>
                                        <input type = 'button' value = 'Search' className = 'search-btn'
                                            onClick = {() => handleSearch() } />
                                    </>
                                : <></>
                            }
                        </div>

                        {
                            !open ? 
                                <>
                                    <h2 className = 'open__bar' onClick = {() => toggleStyle()}>⌄</h2>
                                </>
                            : <></>
                        }

                    </div>
                </div>
            </div>

            {

                (recent) ?
                    <>
                        <h1 className = 'search-title'>Recently Added</h1>
                            <div className = 'properties-wrap'>
                                {
                                    properties ? properties.map(property => (
                                            <div onClick = {() => openProperty(property.id) }>
                                                <PropertyPanel
                                                    image = {property.image}
                                                    headline = {property.headline}
                                                    address = {property.address}
                                                    available = {property.availability}
                                                    beds = {property.beds}
                                                    baths = {property.baths}
                                                    parks = {property.parks}
                                                    price = {property.price} />
                                            </div>

                                    )): <></>
                                }
                            </div>
                    </>
                :
                    (filtered) ?
                        <>
                            <h1 className = 'search-title'>Search Results</h1>
                            <input type = 'button' value = 'Sort' onClick = {() => handleSort()} />
                            <div className = 'properties-wrap'>
                                {
                                    filtered.map(property => (
                                        <div onClick = {() => openProperty(property.id) }>
                                            <PropertyPanel
                                                image = {property.image}
                                                headline = {property.headline}
                                                address = {property.address}
                                                available = {property.availability}
                                                beds = {property.beds}
                                                baths = {property.baths}
                                                parks = {property.parks}
                                                price = {property.price} />
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        :
                        <>
                            <p>No properties found</p>
                        </>
            }
            
            

    </div>
        
    )
}

export default Search;