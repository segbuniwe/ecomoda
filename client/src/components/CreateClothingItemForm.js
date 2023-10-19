import { useState, useEffect } from 'react';
import { useCreateClothesMutation, useGetAccountQuery } from "../app/apiSlice";
import { useNavigate } from 'react-router-dom';

const CreateClothingItemForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState("");
    const [clothing, clothingResult] = useCreateClothesMutation();
    const { data: account, isLoading: isAccountLoading } = useGetAccountQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (clothingResult.error) {
            if (clothingResult.error.status === 422) {
                alert(clothingResult.error.data.detail[0].msg);
            }
        }
        if (clothingResult.isSuccess) {
            setName("");
            setDescription("");
            setSize("");
            setImage("");
            alert("Clothing created successfully.");
        }
    }, [clothingResult]);

    useEffect(() => {
        if (!isAccountLoading && !account) {
            navigate("/");
        }
    }, [isAccountLoading, account, navigate]);

    // const handleImageUpload = (acceptedFiles) => {
    //     console.log(acceptedFiles);
    //     setImage(acceptedFiles[0]);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            name: name,
            description: description,
            size: size,
            image: image,
        };
        clothing(body);
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
                <label>Image</label>
                <input
                    type="text"
                    name='image'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateClothingItemForm;
