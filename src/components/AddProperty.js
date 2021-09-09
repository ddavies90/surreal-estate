import { useState } from 'react';
import axios from 'axios';
import '../styles/AddProperty.scss';

const AddProperty = () => {
  const initialState = {
    fields: {
      bathrooms: '',
      bedrooms: '',
      city: '',
      email: '',
      price: '',
      title: '',
      type: ''
    }
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = async (event) => {
    const endpoint = 'http://localhost:4000/api/v1/PropertyListing';
    event.preventDefault();
    try {
      const response = await axios.post(endpoint, fields);
      if (response.status === 201) {
        console.log(response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Name
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="Enter a property name"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="Email"
            required
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            required
          >
            <option value="" defaultValue disabled>
              Select City
            </option>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            required
          >
            <option value="" defaultValue disabled>
              Select property type
            </option>
            <option value="flat">Flat</option>
            <option value="detatched">Detatched</option>
            <option value="semi-detatched">Semi-Detatched</option>
            <option value="terraced">Terraced</option>
            <option value="end-of-terrace">End-of-Terrace</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            min="1"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="No. of bedrooms"
            required
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            min="1"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="No. of bathrooms"
            required
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            type="number"
            min="0.01"
            step="0.01"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="Price (£)"
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
