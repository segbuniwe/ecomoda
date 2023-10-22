import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/clothingdetail.css';

function ClothingDetailPage() {
    const { clothes_id } = useParams();
    const [clothes, setClothes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5001/api/clothes/${clothes_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((clothesData) => {
                setClothes(clothesData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching clothes data:", error);
                setIsLoading(false);
            });
    }, [clothes_id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="clothing-detail-container">
            <h1 className="clothing-name">{clothes.name}</h1>
            <div>
                <img src={clothes.image} alt={clothes.name} className="clothing-image" />
            </div>
            <div>
                <p className="clothing-description">Description: {clothes.description}</p>
            </div>
            <div className="clothing-details">
                <div className="clothing-info">
                    <p className="clothing-size">Size: {clothes.size}</p>
                </div>
                <div className="clothing-info">
                    <p className="contact-me">Contact Me: {clothes.contact}</p>
                </div>
            </div>
        </div>
    );
}

export default ClothingDetailPage;
