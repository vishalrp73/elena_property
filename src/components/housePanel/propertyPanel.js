import './propertyPanel.css';

import bed_icon from '../../img/propertyPanel/bed-icon.png';
import bath_icon from '../../img/propertyPanel/bath-icon.png';
import parks_icon from '../../img/propertyPanel/parks-icon.png';
import house_img from '../../img/placeholder/house-img.png';

const PropertyPanel = (props) => {
    return (
        <div className = 'property-wrapper'>

            <div className = 'property-img-wrapper'>
                <img src = { house_img } className = 'property-img' />
            </div>

            <div className = 'detail-container'>
                <div className = 'detail-wrap'>
                    <h5 className = 'panel-headline'>{ props.headline }</h5>
                    <p className = 'panel-address'>{ props.address }</p>
                    <p className = 'available-text'>Available: { props.available }</p>
                    
                    <div className = 'bottom_details-wrapper'>

                        <div className = 'bot-wrap'>
                            <img src = { bed_icon } className = 'bot-icon' />
                            <p className = 'num-text'>{ props.beds }</p>
                        </div>

                        <div className = 'bot-wrap'>
                            <img src = { bath_icon } className = 'bot-icon' />
                            <p className = 'num-text'>{ props.baths }</p>
                        </div>

                        <div className = 'bot-wrap'>
                            <img src = { parks_icon } className = 'bot-icon' />
                            <p className = 'num-text'>{ props.parks }</p>
                        </div>

                        <div className = 'price-wrap-bot'>
                            <h5 className = 'price-text'>${props.price}/per week</h5>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyPanel;