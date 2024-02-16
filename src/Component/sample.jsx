import React, { useState } from "react";
import propertiesData from "../Properties.json";
import '../App.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DateTimePicker, Calendar, DropdownList } from 'react-widgets';
// import 'react-widgets/dist/css/react-widgets.css'; // Import the styles
import 'react-widgets/styles.css';


const Properties = () => {

      const [properties, setProperties] = useState(propertiesData.properties);
      const [minPrice, setMinPrice] = useState("");
      const [maxPrice, setMaxPrice] = useState("");
      const [minRooms, setMinBedrooms] = useState("");
      const [maxRooms, setMaxBedrooms] = useState("");
      const [category, setCategory] = useState("");



      const handleFilter = () => {
            let filteredProperties = propertiesData.properties;

            if (minPrice !== "") {
                  filteredProperties = filteredProperties.filter(
                        (property) => property.price >= parseInt(minPrice)
                  );
            }

            if (maxPrice !== "") {
                  filteredProperties = filteredProperties.filter(
                        (property) => property.price <= parseInt(maxPrice)
                  );
            }

            if (minRooms !== "") {
                  filteredProperties = filteredProperties.filter(
                        (property) => property.bedrooms >= parseInt(minRooms)
                  );
            }

            if (maxRooms !== "") {
                  filteredProperties = filteredProperties.filter(
                        (property) => property.bedrooms <= parseInt(maxRooms)
                  );
            }

            if (category !== "") {
                  filteredProperties = filteredProperties.filter(
                        (property) => property.category === category
                  );
            }

            setProperties(filteredProperties);
      };


      const uniqueTypes = Array.from(new Set(properties.map((item) => item.category)));

      const uniqueMinPrice = Array.from(new Set(properties.map((item) => item.price)));

      const uniqueMaxPrice = Array.from(new Set(properties.map((item) => item.price)));

      const uniqueMinRooms = Array.from(new Set(properties.map((item) => item.bedrooms)));

      const uniqueMaxRooms = Array.from(new Set(properties.map((item) => item.bedrooms)));

      const handleClear = () => {
            setMinPrice("");
            setMaxPrice("");
            setMinBedrooms("");
            setMaxBedrooms("");
            setCategory("");
      };


      //   Date Picker
     


          const handleSearch = () => {
            console.log("Selected Category:", category);
            
            let filteredProperties = propertiesData.properties;

            if (category !== "") {
                  filteredProperties = filteredProperties.filter(
                        (property) => property.category === category
                  );
            }

            console.log("Filtered Properties:", filteredProperties);
        
             setProperties(filteredProperties);
          };
          

      return (
            <>
                  <div>
                        <div className="top-banner">
                              <h1>Latest Properties</h1>
                        </div>
                        <div className="form-section">
                              <div class="mb-3">
                                    <label> Min Price: </label>
                                    <select className="inputField" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                                          <option>--Select--</option>
                                          {uniqueMinPrice.map((minPrice, index) => (
                                                <option key={index} value={minPrice}>
                                                      {minPrice}
                                                </option>
                                          ))}
                                    </select>
                              </div>
                              <div class="mb-3">
                                    <label> Max Price:</label>
                                    <select className="inputField" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                                          <option>--Select--</option>
                                          {uniqueMaxPrice.map((maxPrice, index) => (
                                                <option key={index} value={maxPrice}>
                                                      {maxPrice}
                                                </option>
                                          ))}
                                    </select>
                              </div>
                              <div class="mb-3">
                                    <label>Min Bedrooms:</label>
                                    <select className="inputField" value={minRooms} onChange={(e) => setMinBedrooms(e.target.value)}>
                                          <option>--Select--</option>
                                          {uniqueMinRooms.map((minRooms, index) => (
                                                <option key={index} value={minRooms}>
                                                      {minRooms}
                                                </option>
                                          ))}
                                    </select>
                              </div>

                              <div class="mb-3">
                                    <label>Max Bedrooms:</label>
                                    <select className="inputField" value={maxRooms} onChange={(e) => setMaxBedrooms(e.target.value)}>
                                          <option>--Select--</option>
                                          {uniqueMaxRooms.map((maxRooms, index) => (
                                                <option key={index} value={maxRooms}>
                                                      {maxRooms}
                                                </option>
                                          ))}
                                    </select>
                              </div>
                               <div class="mb-3">
                                    <label>Category:</label>
                                    <select className="inputField" value={category} onChange={(e) => setCategory(e.target.value)}>
                                          <option>--Select--</option>
                                          {uniqueTypes.map((category, index) => (
                                                <option key={index} value={category}>
                                                      {category}
                                                </option>
                                          ))}
                                    </select>
                              </div>
                              <div className="filter-buttons">
                                    <button onClick={handleFilter}>Filter</button>
                                    <button onClick={handleClear}>Clear</button>
                              </div>
                        </div>
                  </div>

                  <div className="container my-5">
                        <DropdownList
                        textField="category"
                        data={uniqueTypes}
                         valueField="id" />

                        <button onClick={handleSearch}>Search</button>
                        
                  </div>

                  <div className="container house-view">
                        {properties.map((property) => (
                              <div className="house-view-card" key={property.id}>
                                    <div className='img'>
                                          <img src={property.imgSrc} alt="name" />
                                    </div>
                                    <div className="house-view-body">
                                          <h2 className="property-title">{property.name}</h2>
                                          <p>Category: {property.category}</p>
                                          <p>Price: ${property.price}</p>
                                          <p>Bedrooms: {property.bedrooms}</p>
                                          <div className="added-date">
                                                <p>Added :</p>
                                                <p> {property.added.month}</p>
                                                <p> {property.added.day}</p>
                                                <p> {property.added.year}</p>
                                          </div>
                                          <Link to={`/products/${property.id}`} className="btn btn-outline-dark w-100">View More</Link>
                                    </div>
                              </div>
                        ))}
                  </div>
            </>
      );
};

export default Properties;
