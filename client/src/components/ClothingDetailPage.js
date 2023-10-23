import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/clothingdetail.css";
import Layout from "./Layout";

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
    <Layout>
      <div className='clothing-detail-container'>
        <h1 className='text-2xl'>{clothes.name}</h1>
        <div>
          <img
            src={clothes.image}
            alt={clothes.name}
            className='clothing-image'
          />
        </div>
        <div>
          <p className='text-xl'>
            <span className='font-bold'>Description:</span>{" "}
            {clothes.description}
          </p>
        </div>
        <div className='clothing-details'>
          <div className='clothing-info'>
            <p>Size: {clothes.size}</p>
          </div>
          <div className='clothing-info'>
            <p>Contact Me: {clothes.contact}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClothingDetailPage;
