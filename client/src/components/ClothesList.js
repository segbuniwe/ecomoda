import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../app/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useGetAllClothesQuery } from "../app/apiSlice";
import '../styles/clothesListImage.css';

function ClothesList() {
    const [search, setSearch] = useState("");
    const { data: clothes, isLoading } = useGetAllClothesQuery();
    const dispatch = useDispatch();
    const [filteredList, setFilteredList] = useState([]);
    const [sort, setSort] = useState("");
    const navigate = useNavigate();
    const { data: account, isLoading: isAccountLoading } = useGetAccountQuery();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filteredClothes = clothes.filter((clothing) =>
            clothing.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredList(filteredClothes);
    };

    const handleSortSubmit = (e) => {
        e.preventDefault();
        if (sort) {
            const filteredClothes = clothes.filter((clothing) =>
                clothing.account_location === sort
            );
            setFilteredList(filteredClothes);
        }
    };


    useEffect(() => {
        if (!isAccountLoading && !account) {
            navigate("/");
        }
    }, [isAccountLoading, account, navigate]);

    useEffect(() => {
        setFilteredList(clothes);
    }, [clothes]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSearchSubmit}>
                    <div>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search By Item Name"
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Search
                        </button>
                    </div>
                </form>

                <form onSubmit={handleSortSubmit}>
                    <select
                        value={sort}
                        onChange={(e) => {
                            setSort(e.target.value);
                        }}
                        id="sortSelect"
                    >
                        <option value="">Sort by...</option>
                        <option value="Atlanta, GA">Atlanta, GA</option>
                        <option value="Boston, MA">Boston, MA</option>
                        <option value="Las Vegas, NV">Las Vegas, NV</option>
                        <option value="Los Angeles, CA">Los Angeles, CA</option>
                        <option value="Miami, FL">Miami, FL</option>
                        <option value="Nashville, TN">Nashville, TN</option>
                        <option value="New York, NY">New York, NY</option>
                        <option value="Philadelphia, PA">Philadelphia, PA</option>
                        <option value="San Francisco, CA">San Francisco, CA</option>
                    </select>
                    <div>
                        <button type='submit'>Sort</button>
                    </div>
                </form>

                <div>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(reset());
                            setSearch("");
                            setSort("");
                            setFilteredList(clothes);
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div>
                <h1>Clothing List</h1>
                <div>
                    {filteredList && filteredList.length > 0 ? (
                        filteredList.map((clothing) => (
                            <div key={clothing.id}>
                                <img src={clothing.image} className="item item-img"></img>
                                <Link to={`/clothes/${clothing.id}`}>
                                    {clothing.name}
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No clothing found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ClothesList;
