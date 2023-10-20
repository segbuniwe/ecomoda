import React, { useState, useEffect } from "react";

function ClothesList() {
    const [search, setSearch] = useState("");
    // const [sort, setSort] = useState("");
    const [filteredClothes, setFilteredClothes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/clothes/list");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                const filtered = data.filter((clothing) =>
                    clothing.name.toLowerCase().includes(search.toLowerCase())
                );

                setFilteredClothes(filtered);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);

    return (
        <div>
            <div>
                <form>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by Item Name"
                    />
                </form>
            </div>

            <div>
                <h1>Clothing List</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : filteredClothes.length > 0 ? (
                    <ul>
                        {filteredClothes.map((clothing) => (
                            <li key={clothing.id}>
                                <img src={clothing.image} alt={clothing.name} />
                                {clothing.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No clothing found.</p>
                )}
            </div>
        </div>
    );
}

export default ClothesList;
