import { Link, useNavigate, useParams } from "react-router-dom";
import {
    useGetAccountQuery,
    useGetClothesByIdQuery,
} from "../app/apiSlice";
import { useEffect } from "react";

function ClothingDetailPage() {
    const { clothes_id } = useParams();
    const { data: clothes, isLoading } = useGetClothesByIdQuery(clothes_id);
    const { data: account, isLoading: isAccountLoading } = useGetAccountQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAccountLoading && !account) {
            navigate("/");
        }
    }, [isAccountLoading, account, navigate]);

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
                            <p>Contact Me: {clothes.account_email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClothingDetailPage;
