import React, { useState } from "react";
import propertiesData from "../Properties.json";
import '../App.css';
import { Link } from 'react-router-dom';
import { DropdownList } from 'react-widgets';
import 'react-widgets/styles.css';

const Properties = () => {
      const [properties, setProperties] = useState(propertiesData.properties);
      const [minPrice, setMinPrice] = useState("");
      const [maxPrice, setMaxPrice] = useState("");
      const [minRooms, setMinBedrooms] = useState("");
      const [maxRooms, setMaxBedrooms] = useState("");
      const [category, setCategory] = useState("");
      const [added, setDateFilter] = useState("");

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

            // Apply date filter if selected
            if (added === "last7days") {
                  const last7Days = new Date();
                  last7Days.setDate(last7Days.getDate() - 7);
                  filteredProperties = filteredProperties.filter(
                        (property) => new Date(property.added.year, property.added.month, property.added.day) >= last7Days
                  );
            } else if (added === "lastMonth") {
                  const lastMonth = new Date();
                  lastMonth.setMonth(lastMonth.getMonth() - 1);
                  filteredProperties = filteredProperties.filter(
                        (property) => new Date(property.added.year, property.added.month, property.added.day) >= lastMonth
                  );
            }

            setProperties(filteredProperties);
      };

      const uniqueTypes = ['All', ...Array.from(new Set(properties.map((item) => item.category))).sort()];
      const uniqueMinPrice = Array.from(new Set(properties.map((item) => item.price))).sort();
      const uniqueMaxPrice = Array.from(new Set(properties.map((item) => item.price))).sort();
      const uniqueMinRooms = Array.from(new Set(properties.map((item) => item.bedrooms))).sort();
      const uniqueMaxRooms = Array.from(new Set(properties.map((item) => item.bedrooms))).sort();

      const handleCategoryChange = (value) => {
            // If 'All' is selected, show all properties; otherwise, filter by category
            const filteredProperties = value === 'All' ? properties : properties.filter(property => property.category === value);
            setProperties(filteredProperties);
          };

      const handleClear = () => {
            setMinPrice("");
            setMaxPrice("");
            setMinBedrooms("");
            setMaxBedrooms("");
            setCategory("");
            setDateFilter("");
      };


      return (
            <>
                  <div>
                        <div className="top-banner">
                              <h1>Latest Properties</h1>
                        </div>
                        <div className="form-section">
                              <div className="mb-3">
                                    <label> Min Price: </label>
                                    <DropdownList
                                          data={uniqueMinPrice}
                                          value={minPrice}
                                          placeholder="Select"
                                          onChange={(value) => setMinPrice(value)}
                                          textField="price"
                                    />
                              </div>

                              <div className="mb-3">
                                    <label> Max Price: </label>
                                    <DropdownList
                                          data={uniqueMaxPrice}
                                          value={maxPrice}
                                          placeholder="Select"
                                          onChange={(value) => setMaxPrice(value)}
                                          textField="price"
                                    />
                              </div>

                              <div className="mb-3">
                                    <label> Min Rooms: </label>
                                    <DropdownList 
                                          data={uniqueMinRooms}
                                          value={minRooms} 
                                          placeholder="Select"
                                          onChange={(value) => setMinBedrooms(value)}
                                          textField="price"
                                    />
                              </div>

                              <div className="mb-3">
                                    <label> Max Rooms: </label>
                                    <DropdownList
                                          data={uniqueMaxRooms}
                                          value={maxRooms}
                                          placeholder="Select"
                                          onChange={(value) => setMaxBedrooms(value)}
                                          textField="price"
                                    />
                              </div>

                              <div className="mb-3">
                                    <label> Category: </label>
                                    <DropdownList
                                          textField="category"
                                          placeholder="Select"
                                          data={uniqueTypes}
                                          valueField="id"
                                          onChange={handleCategoryChange}
                                          />
                              </div>

                              <div className="mb-3">
                                    <label>Date Filter:</label>
                                    <DropdownList
                                          data={[
                                                { label: "All", value: "" },
                                                { label: "Last 7 days", value: "last7days" },
                                                { label: "Last Month", value: "lastMonth" },
                                          ]}
                                          value={added}
                                          onChange={(value) => setDateFilter(value)}
                                          textField="label" // Specify the property to display
                                    />
                              </div>


                              {/* Repeat similar modifications for other fields */}
                              <div className="filter-buttons">
                                    <button onClick={handleFilter}>Filter</button>
                                    <button onClick={handleClear}>Clear</button>
                              </div>
                        </div>
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
