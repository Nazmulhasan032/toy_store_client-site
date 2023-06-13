import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import useTitle from "../../Hook/UseTitle";

const AllToys = () => {
    useTitle('AllToys')
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchQuery, setSearchQuery] = useState("");


    const handleSort = () => {
        const sortedToys = [...toys].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setToys(sortedToys);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const handleSearch = () => {
        const filteredToys = allToys.filter((toy) =>
            toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setToys(filteredToys);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl font-bold">All Toy cars are here</h2>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="enter toy name"
                            className="input input-bordered"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <button className="btn btn-square" onClick={handleSearch}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                <button className="btn" onClick={handleSort}>
                    {sortOrder === "asc" ? "Low to High price" : "High to Low price"}
                </button>
            </div>

            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 my-5">
                {toys.map((toy) => (
                    <div
                        key={toy._id}
                        className="card card-compact bg-base-100 shadow-xl"
                        data-aos="fade-up"
                    >
                        <div>
                            <figure>
                                <img src={toy.picture} alt="cars" />
                            </figure>
                            <div className="card-body flex-grow-0">
                                <h2 className="card-title">Toy name: {toy.toyName}</h2>
                                <p>Seller name: {toy.name}</p>
                                <p>Category: {toy.category}</p>
                                <p>Price: ${toy.price}</p>
                                <p>{toy.quantity} Available</p>
                                <div className="text-center">
                                    <Link to={`/details/${toy._id}`}>
                                        <button className="btn btn-primary">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    );
};

export default AllToys;


