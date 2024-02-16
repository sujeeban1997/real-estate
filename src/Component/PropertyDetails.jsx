// PropertyDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../Properties.json';
import { NavLink } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
// import properties from '../Properties.json'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {  useCart } from "react-use-cart";


const PropertyDetails = () => {
      const [value, setValue] = React.useState('1');
      const handleChange = (event, newValue) => {
            setValue(newValue);
      };




      const [] = useState(null);
      const { id } = useParams(); 
      useEffect(() => {

      }, [id])
      console.log(id);

      const [favorites, setFavorites] = useState([]);

       const property = propertiesData.properties.find((prop) => prop.id === parseInt(id));

      
      // for add to favorites
      const { addItem } = useCart();


      //     Image gallery section
      const images = [
            {
                  original: "https://markstewart.com/wp-content/uploads/2020/06/MODERN-HOUSE-PLAN-MODERN-SEVEN-MM-2659-FRONT-VIEW-scaled.jpg",
                  thumbnail: "https://markstewart.com/wp-content/uploads/2020/06/MODERN-HOUSE-PLAN-MODERN-SEVEN-MM-2659-FRONT-VIEW-scaled.jpg",
            },
            {
                  original: "https://vinayakproperties.co.in/wp-content/uploads/2022/04/flat.jpg",
                  thumbnail: "https://vinayakproperties.co.in/wp-content/uploads/2022/04/flat.jpg",
            },
            {
                  original: "https://img.freepik.com/premium-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110090.jpg",
                  thumbnail: "https://img.freepik.com/premium-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110090.jpg",
            },
            {
                  original: "https://thumbs.dreamstime.com/b/modern-house-interior-exterior-design-46517595.jpg",
                  thumbnail: "https://thumbs.dreamstime.com/b/modern-house-interior-exterior-design-46517595.jpg",
            },
            {
                  original: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/28143140/Difference-between-flat-and-apartment-686x400.jpg",
                  thumbnail: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/28143140/Difference-between-flat-and-apartment-686x400.jpg",
            },
            {
                  original: "https://media.istockphoto.com/id/472112339/photo/office.jpg?s=612x612&w=0&k=20&c=6Sz7uwxWOvHOoQ0LSLAfjy2Rx7gSOi5EhS6g8T4t_7w=",
                  thumbnail: "https://media.istockphoto.com/id/472112339/photo/office.jpg?s=612x612&w=0&k=20&c=6Sz7uwxWOvHOoQ0LSLAfjy2Rx7gSOi5EhS6g8T4t_7w=",
            },

      ];






      return (
            <div className='property-details container'>
                  <div className="top-banner">
                        <h1>{property.name}</h1>
                  </div>
                  <div className='row'>
                        <div className='col-lg-6'>
                              <img src={property.imgSrc} alt="name" />
                        </div>
                        <div className='col-lg-6 mt-3'>
                              <h4 className='pro-sub-heading'>About this Property</h4>
                              <h6>Category : {property.category}</h6>
                              <h6>Bedrooms : {property.bedrooms}</h6>
                              <h2>Price : ${property.price}</h2>
                              <h6>Tenure : {property.tenure}</h6>
                              <h6>Location : {property.location}</h6>
                              <h6>Added : {property.added.month}</h6>
                              
                              {/* <button className='btn btn-outline-dark px-3 py-2' onClick={addToFavorites} >Add to My Favorites</button> */}
                              <button className='btn btn-outline-dark px-3 py-2' onClick={() => addItem(property)} >Add to My Favorites</button>
                              <NavLink to="/cart" className='btn btn-dark px-3 py-2 ms-2'>My Favourite</NavLink>

                        </div>
                        
                  </div>

                  <div className='react-nav-tabs'>
                                    <div className="top-banner">
                                          <h1>About {property.name}</h1>
                                    </div>
                                    <Tabs variant="enclosed-colored" colorScheme="teal">
                                          <TabList className='tab-list-property'>
                                                <Tab className='nav-tabs-property'>Description</Tab>
                                                <Tab className='nav-tabs-property'>Floor Plan</Tab>
                                                <Tab className='nav-tabs-property'>Google Map</Tab>
                                          </TabList>
                                          
                                          <TabPanels>
                                                <TabPanel>
                                                      <h6 className='description'>{property.description}</h6>
                                                </TabPanel>
                                                <TabPanel>
                                                      <img src={property.floor} alt="name" />
                                                </TabPanel>
                                                <TabPanel>
                                                      <div className='google-map-view'>
                                                            <iframe src={property.map} ></iframe>
                                                      </div>
                                                </TabPanel>
                                          </TabPanels>
                                    </Tabs>
                              </div>
                              <div>
                                    <div className="top-banner">
                                          <h1>Sample Images</h1>
                                    </div>
                              <ImageGallery items={images} />;
                              </div>
            </div>
      );
};

export default PropertyDetails;
