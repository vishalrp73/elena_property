import './search.css';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

import map from '../../img/static-map.png';

const Search = () => {

    const [open, setOpen] = useState(true);

    const [suburb, setSuburb] = useState();
    const [botPrice, setBotPrice] = useState();
    const [topPrice, setTopPrice] = useState();
    const [beds, setBeds] = useState();
    const [baths, setBaths] = useState();
    const [pets, setPets] = useState(false);
    const [parks, setParks] = useState(false);
    const [furnish, setFurnish] = useState(false);
    const [smoking, setSmoking] = useState(false);

    const handleChange = (e) => {

        console.log(e);

    }

    const toggleStyle = () => {
        open ? setOpen(false) : setOpen(true);
    }

    return (
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
                                    <MenuItem value = 'Arch Hill'>Auckland CBD</MenuItem>
                                    <MenuItem value = 'Howick'>Howick</MenuItem>
                                    <MenuItem value = 'Manukau City'>Manukau City</MenuItem>
                                    <MenuItem value = 'Massey'>Massey</MenuItem>
                                    <MenuItem value = 'Rosedale'>Rosedale</MenuItem>
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
                                    <MenuItem value = '200'>$200</MenuItem>
                                    <MenuItem value = '300'>$300</MenuItem>
                                    <MenuItem value = '400'>$400</MenuItem>
                                    <MenuItem value = '500'>$500</MenuItem>
                                    <MenuItem value = '600'>$600</MenuItem>
                                    <MenuItem value = '700'>$700</MenuItem>
                                    <MenuItem value = '800'>$800</MenuItem>
                                    <MenuItem value = '900'>$900</MenuItem>
                                    <MenuItem value = '1000'>$1000</MenuItem>
                                    <MenuItem value = '1100'>$1100</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className = 'price-form'>
                            <Select labelId = 'top-price-label-id' id = 'top-price-select'
                                value = { topPrice } onChange = {(e) => handleChange(e.target.value, 'top-price')}
                                className = 'top-price-select-container' >
                                    <MenuItem value = '300'>$300</MenuItem>
                                    <MenuItem value = '400'>$400</MenuItem>
                                    <MenuItem value = '500'>$500</MenuItem>
                                    <MenuItem value = '600'>$600</MenuItem>
                                    <MenuItem value = '700'>$700</MenuItem>
                                    <MenuItem value = '800'>$800</MenuItem>
                                    <MenuItem value = '900'>$900</MenuItem>
                                    <MenuItem value = '1000'>$1000</MenuItem>
                                    <MenuItem value = '1100'>$1100</MenuItem>
                                    <MenuItem value = '1200'>$1200</MenuItem>
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
                                <input type = 'checkbox' className = 'extras-check' value = 'pets'
                                    onClick = { (e) =>  handleChange(e.target.value, 'pets')} />
                                <p className = 'check-title'>Pet Friendly</p>
                            </div>

                            <div className = 'check-input-container'>
                                <input type = 'checkbox' className = 'extras-check' value = 'parks'
                                    onClick = { (e) => handleChange(e.target.value, 'furnish')} />
                                <p className = 'check-title'>Car Park Available</p>
                            </div>

                            <div className = 'check-input-container'>
                                <input type = 'checkbox' className = 'extras-check' value = 'furnish'
                                    onClick = { (e) => handleChange(e.target.value, 'furnish')} />
                                <p className = 'check-title'>Fully Furnished</p>
                            </div>

                            <div className = 'check-input-container'>
                                <input type = 'checkbox' className = 'extras-check' value = 'smoking'
                                    onClick = { (e) => handleChange(e.target.value, 'smoking') } />
                                <p className = 'check-title'>Smoking Allowed</p> 
                            </div>
                            
                        </div>
                        {
                            open ?
                                <>
                                    <input type = 'button' value = 'Search' className = 'search-btn' />
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
    )
}

export default Search;