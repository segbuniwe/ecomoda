import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ClothingDetailPage() {
    const { clothes_id } = useParams();
    const [clothes, setClothes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch clothes data
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
        <div>
            <h1>{clothes.name}</h1>
            <div>
                <img src={clothes.image} alt={clothes.name} />
            </div>
            <div>
                <p>Description: {clothes.description}</p>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <p>Size: {clothes.size}</p>
                        </div>
                        <div>
                            <p>Contact Me: {clothes.contact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClothingDetailPage;
