import React, { useState } from 'react';

const CreateClothingItemForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [contact, setContact] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const clothingData = {
            name,
            description,
            size,
            image,
            contact,
            location,
        };

        fetch('http://localhost:5001/api/clothes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clothingData),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log('Clothing item created successfully');

                    setName('');
                    setDescription('');
                    setSize('');
                    setImage('');
                    setContact('');
                    setLocation('');
                } else {
                    // Handle errors, e.g., display an error message
                    console.error('Failed to create clothing item');
                }
            })
            .catch((error) => {
                console.error('Request error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Size</label>
                <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>
            <div>
                <label>Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div>
                <label>Contact Information: Email/Phone Number</label>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>
            <div>
                        <label htmlFor="location">Location</label>
                        <select
                            name="location"
                            type='text'
                            value={location}
                            onChange={(e) => { setLocation(e.target.value) }}
                        >
                            <option value="">Select a location</option>
                            <option value="Atlanta, GA">Atlanta, GA</option>
                            <option value="Boston, MA">Boston, MA</option>
                            <option value="Dallas, TX">Dallas, TX</option>
                            <option value="Houston, TX">Houston, TX</option>
                            <option value="Las Vegas, NV">Las Vegas, NV</option>
                            <option value="Los Angeles, CA">Los Angeles, CA</option>
                            <option value="Miami, FL">Miami, FL</option>
                            <option value="Nashville, TN">Nashville, TN</option>
                            <option value="New York, NY">New York, NY</option>
                            <option value="Philadelphia, PA">Philadelphia, PA</option>
                            <option value="San Francisco, CA">San Francisco, CA</option>
                        </select>
                    </div>
            <button type="submit">Create Clothing</button>
        </form>
    );
};

export default CreateClothingItemForm;
