import React, { useState } from 'react';

const CreateClothingItemForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the clothing data
        const clothingData = {
            name,
            description,
            size,
            image,
        };

        // Send the clothing data to your API endpoint for creation
        // You can use fetch or axios to make a POST request to your server
        // Replace 'your-api-endpoint' with the actual endpoint
        fetch('http://localhost:5001/api/clothes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clothingData),
        })
            .then((response) => {
                if (response.status === 201) {
                    // Clothing item created successfully
                    console.log('Clothing item created successfully');
                    // Optionally, reset the form fields
                    setName('');
                    setDescription('');
                    setSize('');
                    setImage('');
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
            <button type="submit">Create Clothing</button>
        </form>
    );
};

export default CreateClothingItemForm;
