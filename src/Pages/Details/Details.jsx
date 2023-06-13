import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const Details = () => {

    const toy = useLoaderData();
    const { picture, toyName, name, price, quantity, category, description, email } = toy;




    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                <figure><img src={picture} alt="cars" /></figure>
                <div className="w-1/2 mx-auto">
                    <div className="card-body flex-grow-0">
                        <h2 className="card-title">Name: {toyName}</h2>
                        <p>Price: ${price}</p>
                        <p>Seller shop Name: {name}</p>
                        <p>Seller Email: {email} </p>
                        <p>Product Category: {category} </p>
                        <p>Available : {quantity} </p>
                        <div className="flex items-center">
                            <div>
                                <p className="mr-2">Ratings:</p>
                            </div>
                            <div className="flex">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStarHalfAlt className="text-yellow-500" />
                            </div>
                        </div>
                        
                        <p>Description: {description} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;