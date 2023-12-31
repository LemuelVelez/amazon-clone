import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="KenWood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81rgIlDm6wL.__AC_SX300_SY300_QL70_ML2_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="34154545545"
                        title="LC-dolida Sleep Headphones, White Noise Bluetooth Sleep Mask 3D Breathable Wireless Eye Mask for Timing, Sleep Mask with Bluetooth Headphones for Side Sleepers Travel,Cool Gadgets for Women Men(Grey)"
                        price={26.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81Jsw3zsu2L._AC_SX679_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX679_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home