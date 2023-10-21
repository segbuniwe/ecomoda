import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ClothesList() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [data, setData] = useState([]);
    const [filteredClothes, setFilteredClothes] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(filteredClothes);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/clothes/list");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const clothesData = await response.json();
                setData(clothesData);
                setFilteredClothes(clothesData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSortSubmit = (e) => {
        e.preventDefault();
        let filtered = [...data];

        if (sort) {
            filtered = filtered.filter((clothing) =>
                clothing.location === sort
            );
        }

        setFilteredClothes(filtered);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        let filtered = [...data];

        if (search) {
            filtered = filtered.filter((clothing) =>
                clothing.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredClothes(filtered);
    };

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
                    <div>
                        <button type='submit'>Sort</button>
                    </div>
                </form>

                <div>
                    <button
                        type="button"
                        onClick={() => {
                            setSearch("");
                            setSort("");
                            setFilteredClothes(data);
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div>
                <h1>Clothing List</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : filteredClothes.length > 0 ? (
                    filteredClothes.map((clothing) => (
                            <div key={clothing._id}>
                                <img src={clothing.image} alt={clothing.name} />
                                <Link to={`/clothes/${clothing._id}`}>
                                    {clothing.name}
                                </Link>
                            </div>
                        ))
                ) : (
                    <p>No clothing found.</p>
                )}
            </div>
        </div>
    );
}

export default ClothesList;
